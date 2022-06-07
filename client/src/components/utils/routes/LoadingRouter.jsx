import React from "react";
import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// compoenent
import {Loadable} from "./Loadable";

export default function LoadingRouter() {
  return useRoutes([{ path: "*", element: <LoaderOne /> }]);
}

// Lazy Loaded Components

// LoaderOne
const LoaderOne = Loadable(
  lazy(() => import("../../design/Loaders/LoaderOne"))
);
