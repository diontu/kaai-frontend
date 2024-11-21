import Chatbox from "@/interface/chat/Chatbox";
import EmptyChat from "@/interface/chat/EmptyChat";
import { useState } from "react";

type ChatProps = {
  chatId?: string;
};

const Chat = ({ chatId }: ChatProps): JSX.Element => {
  const [input, setInput] = useState("");
  // todo: add chat empty state
  const [isChatEmpty] = useState(!chatId);

  const sendMessage = (message: string) => {
    // TODO: send message to backend
    // TODO: also set the chatId so that the state shows non-empty chat interface
  };

  return isChatEmpty ? (
    <div className="h-full w-full flex flex-col justify-center items-center gap-y-6">
      <EmptyChat />
      <Chatbox value={input} onChange={(value) => setInput(value)} />
    </div>
  ) : (
    <>
      <div>non-empty chat interface</div>
      <Chatbox value={input} onChange={(value) => setInput(value)} />
    </>
  );
};

export default Chat;
