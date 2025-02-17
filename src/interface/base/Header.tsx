// components
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, SquarePen } from "lucide-react";

import { Button } from "@/components/ui/button";
import CreateRecipeModal from "@/interface/dashboard/CreateRecipeModal";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-3 border-b-2 border-slate-500 sticky top-0 bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        Kitchen Assistant AI
      </div>

      <div className="flex gap-2 items-center">
        <CreateRecipeModal>
          <Button variant="outline">
            <Plus />
            Add recipe
          </Button>
        </CreateRecipeModal>
        <div
          className="hover:cursor-pointer p-1"
          onClick={() => navigate("/chat")}
        >
          <SquarePen />
        </div>
      </div>
    </div>
  );
};
export default Header;
