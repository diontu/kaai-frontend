import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sortValueOptions: { value: SortValues; label: string }[] = [
  {
    value: "desc",
    label: "highest",
  },
  {
    value: "asc",
    label: "lowest",
  },
];

export type SortValues = "desc" | "asc";

const SortValue = ({
  value,
  placeholder,
  onChange,
}: {
  value: SortValues | null;
  placeholder: string | null;
  onChange: (value: SortValues) => void;
}): JSX.Element => {
  return (
    <Select value={value ?? undefined} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder ?? "Select"} />
      </SelectTrigger>
      <SelectContent>
        {sortValueOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortValue;
