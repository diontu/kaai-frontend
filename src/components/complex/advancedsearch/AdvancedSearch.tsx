import { useState, useEffect } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import FilterRow from "@/components/complex/advancedsearch/FilterRow";

// types
import type { SortValues } from "@/components/complex/advancedsearch/SortValue";

type AdvancedSearchProps = {
  searchValue: string;
  searchOnChange: (value: string) => void;
  searchPlaceholder?: string;
  searchDebounce?: number;
  filterOptions: FilterOptions;
  onChangeFilters?: (filterResults: FilterResults) => void;
};

export type FilterOptions = { value: string; label: string }[];

type FilterResults = Record<string, SortValues | null>[] | null;

const AdvancedSearch = ({
  searchValue,
  searchOnChange,
  searchPlaceholder,
  filterOptions,
  onChangeFilters,
}: AdvancedSearchProps): JSX.Element => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filterResults, setFilterResults] = useState<FilterResults>(null);

  useEffect(() => {
    onChangeFilters?.(filterResults);
  }, [filterResults]);

  const onRowChange = (
    filterOption: string | null,
    value: SortValues | null
  ) => {
    if (!value || !filterOption) return;

    setFilterResults((prev) => {
      if (!prev) {
        return [{ [filterOption]: value }];
      }

      const filterIndex = prev.findIndex((option) => option[filterOption]);
      if (filterIndex !== undefined) {
        // the filter option already exists
        const newFilterResults = [...prev];
        newFilterResults[filterIndex][filterOption] = value;
        return newFilterResults;
      } else {
        // the filter option does not exist
        return [
          ...prev,
          {
            [filterOption]: value,
          },
        ];
      }
    });
  };

  return (
    <div>
      <div className="flex space-x-2">
        <Input
          placeholder={searchPlaceholder ?? "Search"}
          value={searchValue}
          onChange={(e) => {
            searchOnChange(e.target.value);
          }}
        />
        <Button
          className="rounded-full"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          Filters
        </Button>
      </div>
      {filtersOpen && (
        <Card>
          <CardHeader>Search filters</CardHeader>
          <CardContent>
            <FilterRow
              filterOptions={filterOptions}
              onRowChange={onRowChange}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdvancedSearch;
