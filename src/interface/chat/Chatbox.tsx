import { Input } from "@/components/ui/input";

type ChatboxProps = {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
};

const Chatbox = ({ value, onChange, onEnter }: ChatboxProps): JSX.Element => {
  return (
    <Input
      value={value}
      placeholder="Message KAAI"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter()}
    />
  );
};

export default Chatbox;
