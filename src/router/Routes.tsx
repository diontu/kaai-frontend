// components
import Dashboard from "@/interface/dashboard/Dashboard";
import Chat from "@/interface/chat/Chat";

// icons
import { House } from "lucide-react";

// types
import type { LayoutTypes } from "@/interface/base/LayoutUtils";

export type Links = {
  title: string;
  path: string;
  icon: React.ReactNode;
  excludeFromSidebar?: boolean;
  requireAuth?: boolean;
};

export type Routes = Record<
  LayoutTypes,
  (Links & {
    component: React.ReactNode;
  })[]
>;

export const LAYOUT_TO_PATH_MAP: Record<LayoutTypes, string> = {
  main: "/",
};

export const ROUTES: Routes = {
  main: [
    {
      title: "Explore recipes",
      path: "/",
      component: <Dashboard />,
      icon: <House />,
    },
    {
      title: "Saved recipes",
      path: "/saved",
      component: <Dashboard />,
      icon: <House />,
      requireAuth: true,
    },
    {
      title: "Chat",
      path: "/chat",
      component: <Chat />,
      icon: <House />,
      excludeFromSidebar: true,
    },
  ],
};
