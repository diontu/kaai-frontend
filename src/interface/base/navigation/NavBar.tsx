// components
import Profile from "@/interface/base/Profile";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import NavContent from "@/interface/base/navigation/NavContent";
import NavFooter from "@/interface/base/navigation/NavFooter";

// types
import type { Links as LinksType } from "@/router/Routes";

type NavBarProps = {
  links: LinksType[];
  newSidebar: boolean;
};

const NavBar = ({ links, newSidebar }: NavBarProps): JSX.Element => {
  const NewSideBar = () => {
    return (
      <Sidebar variant="floating">
        <NavContent links={links} />
        <NavFooter />
      </Sidebar>
    );
  };

  if (newSidebar) return <NewSideBar />;
  return (
    <div className="flex flex-col p-3 w-[300px] bg-slate-400 text-white justify-between">
      <nav>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.title}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Profile />
    </div>
  );
};

export default NavBar;
