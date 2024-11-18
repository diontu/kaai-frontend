// types
import { createWithMainLayout } from "@/interface/base/Layout";

// types
import type { Links } from "@/router/Routes";
import type { MainLayout } from "@/interface/base/Layout";

export type LayoutTypes = MainLayout;

type LayoutProps = {
  layout: LayoutTypes;
  links: Links[];
};

export const createWithLayout = ({
  layout,
  links,
}: LayoutProps): JSX.Element => {
  switch (layout) {
    case "main":
      return createWithMainLayout(links);
    default:
      return <div>not found</div>;
  }
};
