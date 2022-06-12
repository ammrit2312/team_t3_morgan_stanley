import React from "react";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// components
import { Loadable } from "./Loadable";

// layouts
import SignedOutLayout from "../../../layouts/SignedOutLayout";

// constants
import { entireRoutes, routes } from "../../../constants/routes";
import { accountTypes } from "../../../constants/accounts.constants";

export default function SignedOutRouter() {
  return useRoutes([
    {
      path: entireRoutes.BASE,
      element: <SignedOutLayout />,
      children: [
        {
          element: <SignInPage />,
          index: true,
        },
        {
          path: entireRoutes.SIGN_IN,
          element: <SignInPage />,
        },
        {
          path: entireRoutes.ADMIN_SHOW_VOLUNTEERS,
          element: <ListVolunteers />,
        },
        {
          path: entireRoutes.VOLUNTEER + "/:id",
          element: <ShowProfileVolunteers />,
        },
        {
          path: entireRoutes.ACTIVITY + "/:activityId",
          element: <ActivityPage />,
        },
        {
          path: entireRoutes.SIGN_UP,
          element: <SignUpPage accountType={accountTypes.VOLUNTEER} />,
        },
        {
          path: entireRoutes.ADMIN_SIGN_UP,
          element: <SignUpPage accountType={accountTypes.ADMIN} />,
        },
        {
          path: entireRoutes.VOLUNTEER,
          element: <Test />,
        },
        {
          path: entireRoutes.CONTACT_US,
          element: <ContactUsPage />,
        },
        {
          path: entireRoutes.EMAIL_VERIFICATION,
          element: <EmailVerificationPage />,
        },
        {
          path: entireRoutes.FORGOT_PASSWORD,
          element: <ForgotPasswordPage />,
        },
        // Check
        // {
        //   path: entireRoutes.ADMIN_UPLOAD_ACTIVITY,
        //   element: <UploadActivityForm />,
        // },
        {
          element: <ProfilePage />,
          path: entireRoutes.ACCOUNT_PROFILE,
        },
        { path: entireRoutes.NOT_FOUND, element: <NotFoundPage /> },
      ],
    },
    { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
  ]);
}

// Generic Pages
const SignUpPage = Loadable(
  lazy(() => import("../../../pages/Auth/SignUpPage"))
);

const SignInPage = Loadable(
  lazy(() => import("../../../pages/Auth/SignInPage"))
);

const ContactUsPage = Loadable(
  lazy(() => import("../../../pages/ContactUsPage"))
);

const NotFoundPage = Loadable(lazy(() => import("../../../pages/NotFound")));

const ForgotPasswordPage = Loadable(
  lazy(() => import("../../../pages/Auth/ForgotPasswordPage"))
);

const EmailVerificationPage = Loadable(
  lazy(() => import("../../../pages/Auth/EmailVerificationPage"))
);

const ProfilePage = Loadable(lazy(() => import("../../../pages/ProfilePage")));

const UploadActivityForm = Loadable(
  lazy(() => import("../../../pages/UploadActivityFormPage"))
);

const Dashboard = Loadable(lazy(() => import("../../../pages/Dashboards")));

const ShowProfileVolunteers = Loadable(
  lazy(() => import("../../../pages/ShowProfileVolunteers"))
);

const ListVolunteers = Loadable(
  lazy(() => import("../../../pages/ListVolunteers"))
);

const ActivityPage = Loadable(
  lazy(() => import("../../../pages/ActivityPage"))
);

const Test  = Loadable(lazy(() => import("../../../pages/Chat")));