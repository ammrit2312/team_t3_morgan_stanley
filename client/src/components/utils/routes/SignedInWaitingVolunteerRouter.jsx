import React from "react";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

/**
 *
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns the signed in route for volunteer
 */

// constants
import { entireRoutes, routes } from "../../../constants/routes";
import { signedOutNavbarLinks } from "../../../constants/navbar.constants";

// components
import { Loadable } from "./Loadable";

// layouts
import SignedInLayout from "../../../layouts/SignedInLayout";

export default function SignedInWaitingVolunteerRouter() {
  return useRoutes([
    {
      path: entireRoutes.BASE,
      element: <SignedInLayout navLinks={signedOutNavbarLinks}/>,
      children: [
        // {
        //   path: entireRoutes.VOLUNTEER_FORM,
        //   element: <VolunteerFormPage />,
        // },
        {
          element: <VolunteerFormPage/>,
          index: true,
        },
        { path: entireRoutes.NOT_FOUND, element: <NotFoundPage /> },
      ],
    },
    { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
  ]);
}

// Generic Pages

const NotFoundPage = Loadable(lazy(() => import("../../../pages/NotFound")));

const VolunteerFormPage = Loadable(
  lazy(() => import("../../../pages/VolunteerFormPage"))
);
