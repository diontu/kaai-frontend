import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import IngredientInput from "@/interface/dashboard/IngredientInput";
import { PropsWithChildren } from "react";
import { SignInButton, useAuth } from "@clerk/clerk-react";

type Difficulty = "easy" | "medium" | "hard";

const difficultyOptions: { value: Difficulty; label: string }[] = [
  {
    value: "easy",
    label: "Easy",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "hard",
    label: "Hard",
  },
];

const CreateRecipeModalHeader = (): JSX.Element => {
  return (
    <DialogHeader>
      <DialogTitle className="text-2xl">Add New Recipe</DialogTitle>
    </DialogHeader>
  );
};

const CreateRecipeModalContent = (): JSX.Element => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-[150px]">
        <p className="mb-4 text-lg font-medium">
          You must sign in to save a recipe
        </p>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </div>
    );
  }

  return (
    <>
      <div>
        <Label htmlFor="recipeName">Recipe Name</Label>
        <Input id="recipeName" placeholder="Enter recipe name" />
      </div>
      <div>
        <Label>Ingredients</Label>
        <IngredientInput ingredients={[{ label: "tomato", value: "tomato" }]} />
      </div>
      <div>
        <Label htmlFor="instructions">Instructions</Label>
        <Textarea id="instructions" placeholder="Enter recipe description" />
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Label htmlFor="cookingTime">Cooking Time (minutes)</Label>
          <Input id="cookingTime" placeholder="e.g. 30" />
        </div>
        <div className="w-full">
          <Label htmlFor="difficulty">Difficulty</Label>
          <Select>
            <SelectTrigger id="difficulty">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              {difficultyOptions.map((difficulty) => (
                <SelectItem key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

const CreateRecipeModal = ({ children }: PropsWithChildren): JSX.Element => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <CreateRecipeModalHeader />
          <CreateRecipeModalContent />
          <DialogFooter className="mt-6">
            <Button
              className="w-full"
              variant={"outline"}
              disabled={!isSignedIn}
            >
              Save Draft
            </Button>
            <Button className="w-full" disabled={!isSignedIn}>
              Add Recipe
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateRecipeModal;
