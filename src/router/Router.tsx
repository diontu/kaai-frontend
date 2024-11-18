import { createBrowserRouter } from "react-router-dom";
import { ROUTES, LAYOUT_TO_PATH_MAP } from "@/router/Routes";

// layout
import { createWithLayout, LayoutTypes } from "@/interface/base/LayoutUtils";

const links = Object.values(ROUTES)
  .flat()
  .map((route) => ({
    title: route.title,
    path: route.path,
    icon: route.icon,
  }));

const routes = Object.keys(ROUTES).map((layout) => {
  const LAYOUT = layout as LayoutTypes;

  return {
    path: LAYOUT_TO_PATH_MAP[LAYOUT],
    element: createWithLayout({
      layout: LAYOUT,
      links,
    }),
    children: Object.values(ROUTES[LAYOUT]).map((route) => ({
      path: route.path.substring(1),
      element: route.component,
    })),
  };
});

const Router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter(routes);

export default Router;
