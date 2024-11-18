import { memo } from "react";

// components
import Header from "@/interface/base/Header";
import NavBar from "@/interface/base/navigation/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";

// types
import type { Links } from "@/router/Routes";
import { Outlet } from "react-router-dom";

export type MainLayout = "main";

type Props = {
  links: Links[];
};

const Layout = memo(({ links }: Props) => {
  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen">
        <NavBar links={links} newSidebar={true} />
        <div className="flex flex-col w-full">
          <Header />
          <div className="overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
});

export const createWithMainLayout = (links: Links[]) => {
  return <Layout links={links} />;
};
