import { POST, GET } from "../config/api.config";

export function getAllActivities() {
  return GET(`/api/admin/list-all-activities`);
}

export function getAllBasicDetailsOfUsers() {
  return GET(`/api/admin/get-volunteer-basic-details`);
}

export function getAllUpcomingActivities() {
  return GET(`/api/admin/list-all-upcoming-activities`);
}

export function getAllArchivedActivities() {
  return GET(`/api/admin/get-archived-activities`);
}

export function getPlatformStats(){
  return GET(`/api/stats/get-platform`);
}

export function getPlacesStats(){
  return GET(`/api/stats/get-places-stats`);
}

export function getModeStats(){
  return GET(`/api/stats/get-mode-stats`);
}