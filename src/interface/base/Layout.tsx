import { memo } from "react";
import { Outlet, useLocation } from "react-router-dom";

// components
import Header from "@/interface/base/Header";
import NavBar from "@/interface/base/navigation/NavBar";
import { SidebarProvider } from "@/components/ui/sidebar";

// types
import type { Links } from "@/router/Routes";
import { ProtectedRoute } from "@/router/ProtectedRoute";

export type MainLayout = "main";

type Props = {
  links: Links[];
};

const Layout = memo(({ links }: Props) => {
  const location = useLocation();
  const linkRequiresAuth = links.find(
    (link) => link.path === location.pathname
  )?.requireAuth;

  return (
    <SidebarProvider>
      <div className="flex w-screen h-screen px-6">
        <NavBar links={links} />
        <div className="flex flex-col w-full [&>*]:px-2">
          <Header />
          <div className="overflow-y-scroll flex-grow">
            {linkRequiresAuth ? (
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
});

export const createWithMainLayout = (links: Links[]) => {
  return <Layout links={links} />;
};
