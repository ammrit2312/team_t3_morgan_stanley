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

// export const signedInVolunteerLinks = [
//     {

//     }
// ]