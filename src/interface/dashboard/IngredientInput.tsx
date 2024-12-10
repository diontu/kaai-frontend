import { useState } from "react";
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

  const handleValueChange = (value: string) => {
    setInputValue(value);
    setOpen(!!value);
  };

  const filteredCommands = Array.isArray(ingredients)
    ? ingredients.filter((ingredient) =>
        ingredient.label.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  return (
    <>
      <Command className="rounded-lg border h-auto">
        <CommandInput
          placeholder="Ingredient 1"
          onValueChange={handleValueChange}
        />
        {
          <CommandList>
            {open &&
              filteredCommands.length > 0 &&
              filteredCommands.map((command) => (
                <CommandItem key={command.value} value={command.value}>
                  {command.label}
                </CommandItem>
              ))}
          </CommandList>
        }
      </Command>
    </>
  );
};

export default IngredientInput;
