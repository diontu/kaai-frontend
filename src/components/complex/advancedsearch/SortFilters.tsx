// components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// types
import type { FilterOptions } from "@/components/complex/advancedsearch/AdvancedSearch";

const SortFilters = ({
  filterOptions,
  value,
  placeholder,
  onChange,
}: {
  filterOptions: FilterOptions;
  value: string | null;
  placeholder: string | null;
  onChange: (value: string) => void;
}): JSX.Element => {
  return (
    <Select value={value ?? undefined} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder ?? "Select"} />
      </SelectTrigger>
      <SelectContent>
        {filterOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortFilters;
