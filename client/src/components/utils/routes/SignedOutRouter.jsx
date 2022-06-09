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
                    element: <SignInPage/>,
                    index: true,
                },
                // {
                //     path: entireRoutes.SIGN_IN,
                //     element: <SignInPage />
                // },
                // {
                //     path: entireRoutes.VOLUNTEER_FORM,
                //     element: <VolunteerFormPage />
                // },
                {
                    path: entireRoutes.VOLUNTEER,
                    element: <Dashboard />
                },
                {
                    path: entireRoutes.VOLUNTEER_UPCOMING_ACTIVITIES,
                    element: <ApprovedActivites />
                },
                {
                    path: entireRoutes.SIGN_UP,
                    element: <SignUpPage />
                },
                {
                    path: entireRoutes.CONTACT_US,
                    element: <ContactUsPage />
                },
                // Check
                {
                    path: entireRoutes.ADMIN_UPLOAD_ACTIVITY,
                    element: <UploadActivityForm />
                },
                {path: entireRoutes.NOT_FOUND, element: <NotFoundPage />},
            ],
        },
        { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
    ])
}


// Generic Pages
const SignUpPage = Loadable(
    lazy(() => import("../../../pages/Auth/SignUpPage"))
);

const SignInPage = Loadable(
    lazy(()=>import("../../../pages/Auth/SignInPage")),
);

const ContactUsPage = Loadable(
    lazy(()=>import("../../../pages/ContactUsPage")),
);

const NotFoundPage = Loadable(
    lazy(()=>import("../../../pages/NotFound")),
);

const UploadActivityForm = Loadable(
    lazy(()=>import("../../../pages/UploadActivityFormPage")),
);

const Dashboard = Loadable(
    lazy(()=>import("../../../pages/Dashboards"))
);

const ApprovedActivites = Loadable(
    lazy(()=>import("../../../pages/ApprovedActivities"))
);
