import { GET } from "../config/api.config";

export function getUserData(uid) {
  return GET(`/api/admin/get-all-volunteer-info/${uid}`);
}
