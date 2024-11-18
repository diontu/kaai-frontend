import { SidebarTrigger } from "@/components/ui/sidebar";

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between py-5 border-b-2 border-slate-500 sticky top-0 bg-white">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        KAAI
      </div>
      <div>create chat icon</div>
    </div>
  );
};
export default Header;
