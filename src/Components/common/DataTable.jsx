
import React, { useState } from "react";
import Pagination from "./Pagination";

export default function DataTable({ columns, data }) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const startIdx = (page - 1) * limit;
  const paginatedData = data.slice(startIdx, startIdx + limit);
  const totalPages = Math.ceil(data.length / limit);

  return (
    <div className="bg-white shadow rounded-2xl overflow-hidden w-full flex flex-col ">
      {/* Table */}
      <div className="overflow-x-auto flex-grow">
        <table className="w-full text-left">
          <thead className="bg-yellow-50">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => (
              <tr
                key={idx}
                className={`border-t ${
                  idx % 2 === 0 ? "bg-yellow-50/40" : "bg-white"
                }`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">
                    {typeof col.render === "function"
                      ? col.render(row)
                      : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sticky Pagination */}
      <div className="sticky bottom-0 bg-white ">
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          limit={limit}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
}
