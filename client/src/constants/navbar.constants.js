// constants
import { entireRoutes } from "./routes";

const navLinks = [
    {
        name: "Contact Us",
        path: entireRoutes.CONTACT_US,
    },
];

export const signedOutNavbarLinks = [
    ...navLinks,
];

export const signedInVolunteerLinks = [
    {
        name: "Home",
        path: entireRoutes.BASE,
    },
    {
        name: "Upcoming Activities",
        path: entireRoutes.VOLUNTEER_UPCOMING_ACTIVITIES,
    },
    {
        name: "Profile",
        path: entireRoutes.ACCOUNT_PROFILE,
    },
    ...navLinks,
]

export const signedInAdminLinks = [
    {
        name: "Home",
        path: entireRoutes.BASE,
    },
    {
        name: "Statistics",
        path: entireRoutes.STATS,
    },
    {
        name: "Upload Activity",
        path: entireRoutes.ADMIN_UPLOAD_ACTIVITY,
    },
    {
        name: "Upcoming Activities",
        path: entireRoutes.ADMIN_UPCOMING_ACTIVITIES,
    },
    {
        name: "Archived Activities",
        path: entireRoutes.ADMIN_ARCHIVED_ACTIVITIES,
    },
    {
        name: "Volunteers",
        path: entireRoutes.ADMIN_SHOW_VOLUNTEERS,
    },
    {
        name: "Post Notification",
        path: entireRoutes.POST_NOTIFICATION,
    },
    ...navLinks,
]