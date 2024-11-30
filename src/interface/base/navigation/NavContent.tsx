import { useEffect, useState } from "react";
import moment from "moment";

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
import { House } from "lucide-react";
import { getConversations } from "@/api/conversationApi";

// types
import type { Links as LinksType } from "@/router/Routes";
import type { ConversationType } from "@/api/conversationApi";

type NavContentProps = {
  links: LinksType[];
};

const ApplicationGroup = ({ links }: NavContentProps): JSX.Element => {
  const location = useLocation();

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
  // TODO: this has to refresh when a chat is created
  const [conversations, setConversations] = useState<ConversationType[]>([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await getConversations();

      if (response.status === "success") {
        setConversations(response.data);
      }
    };

    fetchConversations();
  }, []);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {/* TODO: handle dynamic dates retrieved from API */}
          {conversations.map((conversation) => (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link to={"/chat"} state={{ chatId: conversation.id }}>
                  {<House />}
                  <span>
                    {moment(conversation.created_at).format("MMM D, YYYY")}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const NavContent = ({ links }: NavContentProps): JSX.Element => {
  return (
    <SidebarContent>
      <ApplicationGroup links={links} />
      <ChatGroup />
    </SidebarContent>
  );
};

export default NavContent;
