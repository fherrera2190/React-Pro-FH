import { lazy, LazyExoticComponent, ReactNode } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => ReactNode;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}
//Nota para vite es distinto"AVERIGUAR"
const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));
const NoLazy = lazy(
  () => import(/* webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/NoLazy")
);

export const routes: Route[] = [
  {
    to: "/lazyload/*",
    path: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
