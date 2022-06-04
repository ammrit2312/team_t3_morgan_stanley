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
import { accountTypes } from "../../../constants/accounts.constants";

export default function SignedOutRouter() {
    return useRoutes([
        {
            path: entireRoutes.BASE,
            element: <SignedOutLayout />,
            children: [
                {
                    path: entireRoutes.SIGN_IN,
                    element: <SignInPage />
                },
                {
                    path: entireRoutes.SIGN_UP,
                    element: <SignUpPage />
                },
                {
                    path: entireRoutes.CONTACT_US,
                },
            ],
        },
        { path: "*", element: <Navigate to={entireRoutes.NOT_FOUND} replace /> },
    ])
}


// Generic Pages
const SignUpPage = Loadable(
    lazy(() => import("../../../pages/auth/SignUpPage"))
);

const SignInPage = Loadable(
    lazy(()=>import("../../../pages/auth/SignInPage")),
)