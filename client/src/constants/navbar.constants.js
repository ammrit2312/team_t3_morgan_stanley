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