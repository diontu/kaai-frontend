// components
import { Sidebar } from "@/components/ui/sidebar";
import NavContent from "@/interface/base/navigation/NavContent";
import NavFooter from "@/interface/base/navigation/NavFooter";

// types
import type { Links as LinksType } from "@/router/Routes";

type NavBarProps = {
  links: LinksType[];
};

const NavBar = ({ links }: NavBarProps): JSX.Element => {
  return (
    <Sidebar variant="floating">
      <NavContent links={links} />
      <NavFooter />
    </Sidebar>
  );
};

export default NavBar;
