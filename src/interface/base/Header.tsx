// components
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SquarePen } from "lucide-react";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-5 border-b-2 border-slate-500 sticky top-0 bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        KAAI
      </div>

      <div
        className="hover:cursor-pointer p-1"
        onClick={() => navigate("/chat")}
      >
        <SquarePen />
      </div>
    </div>
  );
};
export default Header;
