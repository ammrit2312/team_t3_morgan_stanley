import { GET, POST } from "../config/api.config";

export function postNotification(data){
    return POST(`/api/admin/post-notification`, data);
}

export function getNotification(){
    return GET(`/api/admin/get-all-notification`)
}