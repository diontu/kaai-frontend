import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PropsWithChildren } from "react";

const CreateRecipeModal = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Add New Recipe</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <Input placeholder="Enter recipe name" />
          <Input placeholder="Enter cooking instructions" />
          <DialogFooter className="mt-6">
            <Button className="w-full" variant={"outline"}>
              Save Draft
            </Button>
            <Button className="w-full">Add Recipe</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateRecipeModal;
