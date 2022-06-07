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

export default function SignedInAdminRouter() {
    return useRoutes([
        {
            path: entireRoutes.BASE,
            element: <SignedInLayout navLinks={signedInVolunteerLinks}/>,
            children: [
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

const NotFoundPage = Loadable(
    lazy(()=>import("../../../pages/NotFound")),
);

const UploadActivityForm = Loadable(
    lazy(()=>import("../../../pages/UploadActivityFormPage")),
);
