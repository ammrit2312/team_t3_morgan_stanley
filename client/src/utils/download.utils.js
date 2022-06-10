/**
 * @description This function helps to download the data in a csv file.
 * @param {Array} data The table data
 * @param {String} [filename] The name of the file. Defaults to "data.csv"
 * @param {Object} tableHeaders The tableHEaders object passed to the table
 */
export const downloadData = (data, tableHeaders, filename = "data") => {
  let csvContent = "data:text/csv;charset=utf-8,";

  // Add headers
  csvContent +=
    Object.keys(tableHeaders)
      .map((header) => tableHeaders[header].title)
      .join(",") + "\r\n";

  // Add data
  data.forEach((row) => {
    csvContent +=
      Object.keys(tableHeaders)
        .map((header) =>
          Array.isArray(row[header]) ? row[header].join(" ") : row[header]
        )
        .join(",") + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}.csv`);
  document.body.appendChild(link); // Required for FF

  link.click();
};
