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
                {
                    path: entireRoutes.SIGN_UP,
                    element: <SignUpPage />
                },
                {
                    path: entireRoutes.CONTACT_US,
                    element: <ContactUsPage />
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
