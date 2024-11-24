import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import logo from "../assets/react.svg";
import { routes } from "./routes";
import { NavLi } from "./components/NavLi";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <>
      <Suspense fallback={<h1>Nemesis</h1>}>
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React Logo" />
              <ul>
                {routes.map(({ to, name }) => (
                  <NavLi key={to} to={to} name={name} />
                ))}
              </ul>
            </nav>

            <Routes>
              {routes.map(({ path, Component }) => (
                <Route path={path} key={path} element={<Component />} />
              ))}
              <Route
                path="/*"
                element={<Navigate replace to={routes[0].to} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
      ;
    </>
  );
};
