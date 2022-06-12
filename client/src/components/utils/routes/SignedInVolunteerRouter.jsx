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
import { signedInVolunteerLinks } from "../../../constants/navbar.constants";

// components
import { Loadable } from "./Loadable";

// layouts
import SignedInLayout from "../../../layouts/SignedInLayout";

export default function SignedInVolunteerRouter() {
  return useRoutes([
    {
      path: entireRoutes.BASE,
      element: <SignedInLayout navLinks={signedInVolunteerLinks} showNotification={true}/>,
      children: [
        {
          element: <VolunteerDashboard />,
          index: true,
        },
        {
          element: <ProfilePage/>,
          path: entireRoutes.ACCOUNT_PROFILE,
        },
        {
          path: entireRoutes.VOLUNTEER_UPCOMING_ACTIVITIES,
          element: <ApprovedActivites />,
        },
        {
          element: <ContactUsPage />,
          path: entireRoutes.CONTACT_US,
        },
        {
          element: <NotificationsPage />,
          path: entireRoutes.SHOW_NOTIFICATIONS,
        },
        { path: entireRoutes.NOT_FOUND, element: <NotFoundPage /> },
      ],
    },
    { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
  ]);
}

// Generic Pages

const NotFoundPage = Loadable(lazy(() => import("../../../pages/NotFound")));

const VolunteerDashboard = Loadable(
  lazy(() => import("../../../pages/Dashboards"))
);

const ProfilePage = Loadable(
  lazy(() => import("../../../pages/ProfilePage"))
)

const ApprovedActivites = Loadable(
  lazy(() => import("../../../pages/ApprovedActivities"))
);

const ContactUsPage = Loadable(
  lazy(() => import("../../../pages/ContactUsPage"))
);

const NotificationsPage = Loadable(
  lazy(() => import("../../../pages/NotificationsPage"))
);