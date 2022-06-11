import { GET, PUT } from "../config/api.config";

export function getVolunteerDashboardData(uid) {
  return GET(`/api/admin/get-reccomended-activities/${uid}`);
}

export function volunteerAcceptsActivity(uid, activityId) {
  return PUT(`/api/admin/addpreferredactivity/${uid}/${activityId}`);
}

export function volunteerRejectsActivity(uid, activityId) {
  return PUT(`/api/admin/reject-activity/${uid}/${activityId}`);
}