import { PUT, GET } from "../config/api.config";

export function getDetailsofSingleActivity(activityid) {
  return GET(`api/admin/get-single-activity/${activityid}`);
}

export function getAllMappedUsers(activityid) {
  return GET(`/api/admin/get-all-mapped-users/${activityid}`);
}

export function getAllFinalisedUsers(activityid) {
  return GET(`api/admin/get-all-accepted-users/${activityid}`);
}

export function adminApprove(activityid, uid) {
  return PUT(`api/admin/updateList/${activityid}/${uid}`);
}

export function adminReject(activityid, uid) {
  return PUT(`/api/admin/reject-volunteer/${activityid}/${uid}`);
}
