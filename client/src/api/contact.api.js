import { POST, GET} from "../config/api.config";

export const postContactUs = (data) => {
    return POST(`/api/user/post-contact-us`, data);
}