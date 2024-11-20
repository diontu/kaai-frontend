// components
import Dashboard from "@/interface/dashboard/Dashboard";

// icons
import { House } from "lucide-react";

// types
import type { LayoutTypes } from "@/interface/base/LayoutUtils";

export type Links = {
  title: string;
  path: string;
  icon: React.ReactNode;
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
      title: "My Recipes",
      path: "/",
      component: <Dashboard />,
      icon: <House />,
    },
    {
      title: "Explore Recipes",
      path: "/explore",
      component: <Dashboard />,
      icon: <House />,
    },
  ],
};
