import React from "react";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// constants
import { entireRoutes, routes } from "../../../constants/routes";
import { signedInAdminLinks } from "../../../constants/navbar.constants";

// components
import { Loadable } from "./Loadable";

// layouts
import SignedInLayout from "../../../layouts/SignedInLayout";

export default function SignedInAdminRouter() {
  return useRoutes([
    {
      path: entireRoutes.BASE,
      element: <SignedInLayout navLinks={signedInAdminLinks} />,
      children: [
        {
          element: <AdminDashboard />,
          index: true,
        },
        {
          path: entireRoutes.ADMIN_UPCOMING_ACTIVITIES,
          element: <UpcomingActivityPage />,
        },
        {
          path: entireRoutes.ADMIN_SHOW_VOLUNTEERS,
          element: <ListVolunteers />,
        },
        {
          path: entireRoutes.ADMIN_UPLOAD_ACTIVITY,
          element: <UploadActivityForm />,
        },
        {
          element: <ContactUsPage />,
          path: entireRoutes.CONTACT_US,
        },
        {
          element: <ActivityPage/>,
          path: `${entireRoutes.ACTIVITY}/:id`,
        },
        {
          element: <VolunteerPage/>,
          path: `${entireRoutes.VOLUNTEER}/:id`,
        },
        {
          element: <PostNotificationPage/>,
          path: entireRoutes.POST_NOTIFICATION,
        },
        { path: entireRoutes.NOT_FOUND, element: <NotFoundPage /> },
      ],
    },
    { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
  ]);
}

// Generic Pages

const NotFoundPage = Loadable(lazy(() => import("../../../pages/NotFound")));

const UploadActivityForm = Loadable(
  lazy(() => import("../../../pages/UploadActivityFormPage"))
);

const UpcomingActivityPage = Loadable(
  lazy(() => import("../../../pages/ApprovedActivities"))
);

const ListVolunteers = Loadable(
  lazy(() => import("../../../pages/ListVolunteers"))
);

const ContactUsPage = Loadable(
  lazy(() => import("../../../pages/ContactUsPage"))
);

const AdminDashboard = Loadable(
  lazy(() => import("../../../pages/Dashboards"))
);

const ActivityPage = Loadable(
  lazy(() => import("../../../pages/ActivityPage"))
);

const VolunteerPage = Loadable(
  lazy(() => import("../../../pages/ShowProfileVolunteers"))
);

const PostNotificationPage = Loadable(
  lazy(() => import("../../../pages/PostNotificationPage"))
);