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
    UPCOMING_ACTIVITIES: "upcoming-activities",
    EMAIL_VERIFICATION: "email-verification",
    FORGOT_PASSWORD: "forgot-password",
    POST_NOTIFICATION: "post-notification",
    ACTIVITY: "activity",
    SHOW_NOTIFICATION:  "show-notification",
};

export const entireRoutes = {
    BASE: "/",
    VOLUNTEER: entirepath(routes.VOLUNTEER),
    SIGN_IN: entirepath(routes.SIGN_IN),
    SIGN_UP: entirepath(routes.VOLUNTEER, routes.SIGN_UP),
    VOLUNTEER_FORM: entirepath(routes.VOLUNTEER, routes.FORM),
    ACTIVITY: entirepath(routes.ACTIVITY),
    VOLUNTEER_UPCOMING_ACTIVITIES: entirepath(routes.VOLUNTEER, routes.UPCOMING_ACTIVITIES),
    ADMIN_UPCOMING_ACTIVITIES: entirepath(routes.ADMIN, routes.UPCOMING_ACTIVITIES),
    ADMIN_UPLOAD_ACTIVITY: entirepath(routes.ADMIN, routes.UPLOAD_ACTIVITY),
    ADMIN_SHOW_VOLUNTEERS: entirepath(routes.ADMIN, routes.SHOW_VOLUNTEERS),
    ACCOUNT: entirepath(routes.ACCOUNT),
    ACCOUNT_PROFILE: entirepath(routes.ACCOUNT, routes.PROFILE),
    CONTACT_US: entirepath(routes.CONTACT_US),
    NOT_FOUND: entirepath(routes.NOT_FOUND),
    EMAIL_VERIFICATION: entirepath(routes.EMAIL_VERIFICATION),
    FORGOT_PASSWORD: entirepath(routes.FORGOT_PASSWORD),
    POST_NOTIFICATION: entirepath(routes.ADMIN,routes.POST_NOTIFICATION),
    ADMIN_SIGN_UP: entirepath(routes.ADMIN, routes.SIGN_UP),
    SHOW_NOTIFICATIONS: entirepath(routes.SHOW_NOTIFICATION),
};
