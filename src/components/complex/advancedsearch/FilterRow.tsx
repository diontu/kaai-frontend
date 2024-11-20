import { useState, useEffect } from "react";

// components
import SortFilters from "@/components/complex/advancedsearch/SortFilters";
import SortValue from "@/components/complex/advancedsearch/SortValue";

// types
import type { FilterOptions } from "@/components/complex/advancedsearch/AdvancedSearch";
import type { SortValues } from "@/components/complex/advancedsearch/SortValue";

const FilterRow = ({
  filterOptions,
  onRowChange,
}: {
  filterOptions: FilterOptions;
  onRowChange: (filterOption: string | null, value: SortValues | null) => void;
}): JSX.Element => {
  const [filterOption, setFilterOption] = useState<string | null>(null);
  const [filterValue, setFilterValue] = useState<SortValues | null>(null);

  useEffect(() => {
    onRowChange(filterOption, filterValue);
  }, [filterOption, filterValue]);

  return (
    <div className="flex space-x-3">
      <SortValue
        value={filterValue}
        placeholder={"lowest/higher"}
        onChange={(value) => setFilterValue(value)}
      />
      <SortFilters
        filterOptions={filterOptions}
        value={filterOption}
        placeholder={"Search macros..."}
        onChange={(value) => {
          setFilterOption(value);
        }}
      />
    </div>
  );
};

export default FilterRow;
