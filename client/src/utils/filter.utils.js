/**
 * @param {Number | String} item The data item in row
 * @param {String | Number} filterState The filter by value in thefilter
 * @param {String} type The type of values being compared. Accepted Values "text", "date" or "number"
 * @returns true or false depending upon the presence of filterState inside item
 */
export const checkInclusion = (item, filterState, type) => {
  if (!item) {
    return false;
  }

  switch (type) {
    case "text":
      return item
        .toString()
        .toLowerCase()
        .includes(filterState.toString().toLowerCase());

    case "date":
      const date1 = new Date(item);
      const date2 = new Date(filterState);
      return date1.getTime() === date2.getTime();

    case "number":
      return item
        .toString()
        .toLowerCase()
        .includes(filterState.toString().toLowerCase());

    default:
      return item === filterState;
  }
};
