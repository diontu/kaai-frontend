import { useState, useEffect, useRef } from "react";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type IngredientInputProps = { ingredients: { value: string; label: string }[] };

const IngredientInput = ({ ingredients }: IngredientInputProps) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        commandRef.current &&
        !commandRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredIngredients = Array.isArray(ingredients)
    ? ingredients.filter((ingredient) =>
        ingredient.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  return (
    <>
      <Command
        ref={commandRef}
        className="rounded-lg border h-auto relative overflow-visible"
      >
        <CommandInput
          placeholder="Ingredient 1"
          onValueChange={handleValueChange}
        />
        {
          <CommandList className="absolute top-full w-full shadow-md overflow-visible">
            {open &&
              filteredIngredients.length > 0 &&
              filteredIngredients.map((ingredient) => (
                <CommandItem
                  key={ingredient.value}
                  value={ingredient.value}
                  onSelect={() => {
                    console.log("gg");
                    setOpen(false);
                  }}
                >
                  {ingredient.label}
                </CommandItem>
              ))}
          </CommandList>
        }
      </Command>
    </>
  );
};

export default IngredientInput;
