import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

// components
import Chatbox from "@/interface/chat/Chatbox";
import EmptyChat from "@/interface/chat/EmptyChat";

// utils
import AIChat from "@/api/ai-chat";
import {
  createConversation,
  getMessagesFromConversationId,
} from "@/api/conversationApi";

// type
import type { MessageType } from "@/api/conversationApi";

type MessageObjectType = {
  message: string;
  chatId: string;
};

type MessagesType = (MessageType | { message: string; user: boolean })[];

const Chat = (): JSX.Element => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { chatId: existingChatId } = location.state || {};

  const [messages, setMessages] = useState<MessagesType>([]);
  const [input, setInput] = useState("");
  const [chatId, setChatId] = useState(existingChatId);

  useEffect(() => {
    AIChat.start();
    AIChat.setOnMessage(handleMessage);
    AIChat.setOnFinishedMessage(invalidateConversations);

    return () => {
      AIChat.close();
    };
  }, []);

  useEffect(() => {
    getExistingMessages(existingChatId);
  }, [location.state]);

  const invalidateConversations = () => {
    queryClient.invalidateQueries({
      queryKey: ["conversations"],
    });
  };

  const getExistingMessages = async (chatId: string) => {
    if (!chatId) {
      setMessages([]);
      setChatId("");
      return;
    }

    const results = await getMessagesFromConversationId(btoa(chatId));
    if (results.status === "success") {
      setChatId(chatId);
      setMessages(results.data);
    }
  };

  const handleMessage = (event: MessageEvent) => {
    setMessages((prevMessages) => {
      const lastMessageObject = prevMessages[prevMessages.length - 1];

      if (!("user" in lastMessageObject)) return prevMessages;
      if (lastMessageObject.user) return prevMessages;

      return [
        ...prevMessages.slice(0, prevMessages.length - 1),
        {
          ...lastMessageObject,
          message: lastMessageObject.message + event.data,
        },
      ];
    });
  };

  const sendMessage = async (message: string) => {
    let cId = chatId;
    if (!cId) {
      const result = await createConversation();
      if (result.status === "error") return;

      setChatId(result.data.id);
      cId = result.data.id;

      invalidateConversations();
    }
    const messageObject: MessageObjectType = {
      message,
      chatId: cId,
    };
    AIChat.sendMessage(JSON.stringify(messageObject));

    setInput("");
    setMessages((prevMessages) => {
      return [
        ...prevMessages,
        { user: true, message },
        { user: false, message: "" },
      ];
    });
  };

  const Conversation = memo(
    ({ messages }: { messages: MessagesType }): JSX.Element | null => {
      if (messages.length === 0) return null;

      return (
        <div>
          {messages.map((msg, idx) => {
            if (
              ("content" in msg && !msg.content) ||
              ("message" in msg && !msg.message)
            )
              return null;

            if (
              ("user_id" in msg && msg.user_id) ||
              ("user" in msg && msg.user)
            ) {
              return (
                <div
                  key={`messages-${idx}`}
                  className="bg-slate-200 flex justify-end"
                >
                  <span className="w-[300px] text-right">
                    {("content" in msg && msg.content) ||
                      ("message" in msg && msg.message)}
                  </span>
                </div>
              );
            } else {
              return (
                <div key={`messages-${idx}`}>
                  <span className="w-[300px]">
                    {("content" in msg && msg.content) ||
                      ("message" in msg && msg.message)}
                  </span>
                </div>
              );
            }
          })}
        </div>
      );
    }
  );

  return !chatId ? (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-6">
      <EmptyChat />
      <Chatbox
        value={input}
        onChange={(value) => setInput(value)}
        onEnter={() => sendMessage(input)}
      />
    </div>
  ) : (
    <>
      <Conversation messages={messages} />
      <Chatbox
        value={input}
        onChange={(value) => setInput(value)}
        onEnter={() => sendMessage(input)}
      />
    </>
  );
};

export default Chat;
