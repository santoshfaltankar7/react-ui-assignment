import { useState } from "react";

export default function DataTable({ data, columns, loading, selectable, onRowSelect }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);

  const handleSelect = (row) => {
    let newSelected;
    if (selectedRows.includes(row)) {
      newSelected = selectedRows.filter((r) => r !== row);
    } else {
      newSelected = [...selectedRows, row];
    }
    setSelectedRows(newSelected);
    onRowSelect && onRowSelect(newSelected);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  let sortedData = [...data];
  if (sortConfig) {
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  if (loading) return <p className="p-4 text-gray-500">Loading...</p>;
  if (!data.length) return <p className="p-4 text-gray-500">No data available</p>;

  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2">Select</th>}
          {columns.map((col) => (
            <th
              key={col.key}
              className="p-2 cursor-pointer"
              onClick={() => handleSort(col.key)}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelect(row)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={col.key} className="p-2">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
