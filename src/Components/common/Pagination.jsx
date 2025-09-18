import React from "react";

export default function Pagination({ page, setPage, totalPages, limit, setLimit }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-yellow-50">
      <span>
        Items Per Page:{" "}
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
          className="border rounded px-2 py-1"
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </span>

      <div className="flex items-center gap-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-2">
          &larr;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-2 rounded-full ${
              page === i + 1 ? "bg-yellow-400" : "hover:bg-yellow-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="px-2">
          &rarr;
        </button>
      </div>
    </div>
  );
}
