import { Input } from "@/components/ui/input";

type ChatboxProps = {
  value: string;
  onChange: (value: string) => void;
};

const Chatbox = ({ value, onChange }: ChatboxProps): JSX.Element => {
  return (
    <Input
      value={value}
      placeholder="Message KAAI"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Chatbox;
