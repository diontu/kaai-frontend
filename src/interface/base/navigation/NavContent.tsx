// components
import {
  SidebarContent,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

// types
import type { Links as LinksType } from "@/router/Routes";
import { House } from "lucide-react";

type NavContentProps = {
  links: LinksType[];
};

const NavContent = ({ links }: NavContentProps): JSX.Element => {
  const location = useLocation();
  const ApplicationGroup = (): JSX.Element => {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {links.map((link) => {
              if (link.excludeFromSidebar) return null;
              return (
                <SidebarMenuItem key={link.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === link.path}
                  >
                    <Link to={link.path}>
                      {link.icon}
                      <span>{link.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  };

  const ChatGroup = (): JSX.Element => {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Chat</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {/* TODO: handle dynamic dates retrieved from API */}
            {/* {links.map((link) => ( */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to={"/"}>
                  {<House />}
                  <span>November 16 (recipe name)</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {/* ))} */}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  };

  return (
    <SidebarContent>
      <ApplicationGroup />
      <ChatGroup />
    </SidebarContent>
  );
};

export default NavContent;
