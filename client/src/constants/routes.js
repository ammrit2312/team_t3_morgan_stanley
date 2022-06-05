// utils
import { entirepath } from "../utils/routes.utils";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns The set of routes that are available for this project
 */

export const routes = {
    VOLUNTEER: "volunteer",
    ADMIN: "admin",
    CONTACT_US: "contact-us",
    NOT_FOUND: "404-not-found",
    ACCOUNT: "account",
    PROFILE: "profile",
    SIGN_IN: "sign-in",
    SIGN_UP: "sign-up",
    FORM: "form",
    UPLOAD_ACTIVITY: "upload-activity",
    SHOW_VOLUNTEERS: "show-volunteers",
};

export const entireRoutes = {
    BASE: "/",
    VOLUNTEER: entirepath(routes.VOLUNTEER),
    SIGN_IN: entirepath(routes.SIGN_IN),
    SIGN_UP: entirepath(routes.VOLUNTEER, routes.SIGN_UP),
    VOLUNTEER_FORM: entirepath(routes.VOLUNTEER, routes.FORM),
    ADMIN_UPLOAD_ACTIVITY: entirepath(routes.ADMIN, routes.UPLOAD_ACTIVITY),
    ADMIN_SHOW_VOLUNTEERS: entirepath(routes.ADMIN, routes.SHOW_VOLUNTEERS),
    ACCOUNT: entirepath(routes.ACCOUNT),
    ACCOUNT_PROFILE: entirepath(routes.ACCOUNT, routes.PROFILE),
    CONTACT_US: entirepath(routes.CONTACT_US),
    NOT_FOUND: entirepath(routes.NOT_FOUND),
};