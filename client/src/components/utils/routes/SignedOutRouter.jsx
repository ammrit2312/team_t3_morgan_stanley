import React from "react";
import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

/**
 *
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns The Lazy loaded component according to signed out routes
 */

// components
import { Loadable } from "./Loadable";

// layouts
import SignedOutLayout from "../../../layouts/SignedOutLayout";

// constants
import { entireRoutes, routes } from "../../../constants/routes";

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
            element: <SignInPage />
        },
        // {
        //     path: entireRoutes.VOLUNTEER_FORM,
        //     element: <VolunteerFormPage />
        // },
        // {
        //   path: entireRoutes.VOLUNTEER,
        //   element: <Dashboard />,
        // },
        {
          path: entireRoutes.SIGN_UP,
          element: <SignUpPage />,
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
          element: <ProfilePage/>,
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

// check
const VolunteerFormPage = Loadable(
  lazy(() => import("../../../pages/VolunteerFormPage"))
);
const ProfilePage = Loadable(
  lazy(() => import("../../../pages/ProfilePage"))
)

const UploadActivityForm = Loadable(
  lazy(() => import("../../../pages/UploadActivityFormPage"))
);

const Dashboard = Loadable(lazy(() => import("../../../pages/Dashboards")));


