import React, { useState, useEffect } from "react";
import styles from "./Table.module.css";

// utils
import { checkInclusion } from "../../../utils/filter.utils";
import { downloadData } from "../../../utils/download.utils";

// components
import Button from "../Button";

// constants
import { colors } from "../../../constants/colors.constants";

/**
 *
 * @param tableName - Name of the table. Defaults to "Data"
 * @param {Array} data An array of objects, where each object is a row of the table. This is required.
 * @param {Object} tableHeaders An object with the headers & their configuration. This is required.
 * @param {Boolean} [allowFilters] Whether to allow filtering or not. Default is true.
 * @param {Boolean} [showSerialNo] Whether to show serial number or not. Default is false.
 * @param {String} [borderSpacing] The spacing between the cells. Default is "4px".
 * @param {Number} [itemsPerPage] The number of items to be shown per page. Default is 10.
 * @param {Boolean} [allowDownload] Whether to allow downloading or not. Default is false.
 * @param {String} [filename] The name of the file. Defaults to "data.csv"
 * @param {String} [nullDataPlaceholder] The placeholder to be shown when the value of a cell is null or undefined. Defaults to "-"
 * @param {Function} [onRowClick] The function to be called when a row is clicked.
 * @returns Custom table component
 */
const Table = ({
  tableName = "Data",
  data,
  tableHeaders,
  allowFilters = true,
  showSerialNo = false,
  borderSpacing = "4px",
  itemsPerPage = 10,
  allowDownload = false,
  filename = "data",
  nullDataPlaceholder = "-",
  onRowClick = (data) => {},
  buttons
}) => {
  // Data States
  const [filteredData, setFilteredData] = useState(data);

  // Filter States
  const [filterState, setFilterState] = useState({});

  // Pagination States
  const [rowsPerPage, setRowsPerPage] = useState(itemsPerPage);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(filteredData.length / rowsPerPage)
  );
  const [pageState, setPageState] = useState({
    sliceStartIdx: 0,
    sliceEndIdx: rowsPerPage,
  });

  /* Pagination Functions */
  const handleRowsPerPageChange = (e) => {
    if (e.target.value === "") {
      setRowsPerPage(e.target.value);
      setCurPage(1);
      setPageState({
        sliceStartIdx: 0,
        sliceEndIdx: filteredData.length,
      });
      return;
    }

    if (Number.isInteger(parseInt(e.target.value)) && e.target.value > 0) {
      setRowsPerPage(e.target.value);
      setCurPage(1);
      setPageState({
        sliceStartIdx: 0,
        sliceEndIdx: e.target.value,
      });
      setTotalPages(Math.ceil(filteredData.length / e.target.value));
      return;
    }

    return;
  };

  const handleCurPageChange = (e) => {
    if (e.target.value === "") {
      setCurPage(e.target.value);
      return;
    }

    if (Number.isInteger(parseInt(e.target.value)) && e.target.value > 0) {
      setCurPage(e.target.value);
      setPageState({
        sliceStartIdx: (e.target.value - 1) * rowsPerPage,
        sliceEndIdx: e.target.value * rowsPerPage,
      });
      return;
    }

    return;
  };

  useEffect(() => {
    filterData();
  }, [filterState]);

  /* Filter Functions */

  // Clear all filters
  const clearFilters = () => {
    setFilterState({});
  };

  // Function to handle Change in individual filter values
  const handleColumnFilterChange = (e, header) => {
    const newFilterState = { ...filterState };

    // In case the filter is cleared
    // Deleting empty filters
    if (e.target.value === "") {
      delete newFilterState[header.key];
      setFilterState(newFilterState);
      return;
    }

    setFilterState({
      ...newFilterState,
      [header.key]: e.target.value,
    });
  };

  // Function to actually filter data
  const filterData = () => {
    const filteredData = data.filter((item) => {
      // Check for all the filters
      for (const key in filterState) {
        if (
          !checkInclusion(item[key], filterState[key], tableHeaders[key].type)
        ) {
          return false;
        }
      }
      return true;
    });

    // Setting the filtered data
    setFilteredData(filteredData);
  };

  /* Download functions */
  const handleDownload = () => {
    downloadData(filteredData, tableHeaders, filename);
  };

  /* handle rendering */
  const renderData = (data) => {
    // console.log("Stuff", typeof data, data);
    if(typeof data === "object"){
      return <div style={{width:"100%", display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center"}}>{data}</div>;
    }
    return data ? data.toString() : nullDataPlaceholder
  };

  return (
    <section className={styles.container}>
      <div className={styles.tableHeader}>
        <div className={styles.tableName}>{tableName}</div>
        <span>Total {filteredData.length} rows</span>
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statsDiv}>
          <div>
            Show
            <input
              type="number"
              min="1"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className={styles.statsInput}
            />
            rows per page
          </div>
          <div>
            Show
            <input
              type="number"
              min="1"
              max={totalPages}
              value={curPage}
              onChange={handleCurPageChange}
              className={styles.statsInput}
            />
            of {totalPages} pages
          </div>
        </div>

        <div className={styles.buttonContainer}>
          {allowDownload && (
            <Button 
              value="Download" 
              onClick={handleDownload}
              customStyles= {{
                backgroundColor: colors.PRIMARY_GREEN,
                borderRadius: "10px",
                border: "0",
                fontWeight: "bold",
                fontSize: "0.9rem",
                paddingY: "0.7rem",
                paddingX: "0.2rem",
                width: "2rem",
                marginRight: "0.5rem",
              }}
            />
          )}
          <Button 
            value="Clear All Filters" 
            onClick={clearFilters}
            customStyles= {{
              backgroundColor: colors.PRIMARY_RED,
              borderRadius: "10px",
              border: "0",
              fontWeight: "bold",
              fontSize: "0.9rem",
              paddingY: "0.7rem",
              paddingX: "0.2rem",
              width: "2rem",
            }}
          />
        </div>
      </div>
      <div className={styles.tableContainer}>
      <table style={{ borderSpacing }} className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headRow}>
            {showSerialNo && (
              <th className={styles.th}>
                <div className={`${styles.serialNo}`}>SNo.</div>
              </th>
            )}
            {Object.keys(tableHeaders).map((header, headerIdx) => (
              <th key={headerIdx} className={styles.th}>
                <div className={styles.resizable}>
                  {tableHeaders[header].title}
                </div>
              </th>
            ))}
            {buttons && (
              <th className={styles.th}>
                <div className={styles.resizable}>Actions</div>
              </th>
            )}
          </tr>
          {allowFilters && (
            <tr className={styles.filterContainer}>
              {showSerialNo && <th></th>}
              {Object.keys(tableHeaders).map((header, headerIdx) => (
                <th key={headerIdx}>
                  {tableHeaders[header].options === undefined ? (
                    <input
                      className={styles.vyasInput}
                      type={tableHeaders[header].type}
                      value={filterState[header] ? filterState[header] : ""}
                      placeholder={`Filter by ${tableHeaders[header].title}...`}
                      onChange={(e) =>
                        handleColumnFilterChange(e, tableHeaders[header])
                      }
                    />
                  ) : (
                    <select
                      value={filterState[header] ? filterState[header] : ""}
                      onChange={(e) =>
                        handleColumnFilterChange(e, tableHeaders[header])
                      }
                      className={styles.vyasInput}
                    >
                      <option value="">None Selected</option>
                      {tableHeaders[header].options.map((option, optionIdx) => (
                        <option key={optionIdx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody className={styles.tbody}>
          {filteredData
            .slice(pageState.sliceStartIdx, pageState.sliceEndIdx)
            .map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={styles.tr}
                onClick={(e) => onRowClick(row, e)}
              >
                {showSerialNo && (
                  <td className={styles.td}>
                    {(curPage - 1) * rowsPerPage + rowIdx + 1}
                  </td>
                )}
                {Object.keys(tableHeaders).map((header, headerIdx) => (
                  <td key={headerIdx} className={styles.td}>
                    {Array.isArray(row[tableHeaders[header].key])
                      ? row[tableHeaders[header].key].map((item, itemIdx) => (
                          <div key={itemIdx}>{renderData(item)}</div>
                        ))
                      : renderData(row[tableHeaders[header].key])}
                  </td>
                ))}
                {buttons && (
                  <td className={`${styles.td}`}>
                    <div className={`${styles.buttonCollection}`}>
                      {buttons.map((button, index) => (
                        <Button
                          key={index}
                          {...button}
                          onClick={(e) => button.onClick(e, row)}
                          id={row[0]}
                        />
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </section>
  );
};

export default Table;
