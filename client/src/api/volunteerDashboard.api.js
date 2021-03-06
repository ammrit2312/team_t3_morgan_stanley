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

export function getVolunteerUpcomingActivities(uid) {
  return GET(`/api/admin/upcoming-activities/${uid}`);
}

export function getAdminNumber(){
  return GET(`/api/admin/get-admin-number`);
}

export function volunteerOptsOut(activityId,uid){
  return PUT(`/api/admin/opt-out/${uid}/${activityId}`)
}

export function volunteerReallocation(activityId){
  return PUT(`/api/admin/get-new-user/${activityId}`)
}