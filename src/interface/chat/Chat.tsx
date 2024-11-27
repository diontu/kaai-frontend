import { useState, useEffect } from "react";

// components
import Chatbox from "@/interface/chat/Chatbox";
import EmptyChat from "@/interface/chat/EmptyChat";

// utils
import AIChat from "@/api/ai-chat";

type ChatProps = {
  chatId?: string;
};

const Chat = ({ chatId }: ChatProps): JSX.Element => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  // todo: add chat empty state
  const [isChatEmpty] = useState(!chatId);

  useEffect(() => {
    AIChat.start();
    AIChat.setOnMessage(handleMessage);

    return () => {
      AIChat.close();
    };
  }, []);

  const handleMessage = (event: MessageEvent) => {
    setMessages((prev) => [...prev, event.data]);
  };

  const sendMessage = (message: string) => {
    // TODO: send message to backend
    AIChat.sendMessage(message);
    setInput("");
    // TODO: also set the chatId so that the state shows non-empty chat interface
  };

  return isChatEmpty ? (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-6">
      <EmptyChat />
      {messages}
      <Chatbox
        value={input}
        onChange={(value) => setInput(value)}
        onEnter={() => sendMessage(input)}
      />
    </div>
  ) : (
    <>
      <div>non-empty chat interface</div>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <Chatbox
        value={input}
        onChange={(value) => setInput(value)}
        onEnter={() => sendMessage(input)}
      />
    </>
  );
};

export default Chat;
