import React from "react";
import Navbar from "../commpon/Navbar";
import DataTable from "../commpon/DataTable";
import SidebarStats from "./SidebarStats";

export default function OverviewPage({
  title,
  columns,
  data,
  renderRow,
  stats,
  actions,
  showSidebar = true, // add flag for sidebar
}) {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Navbar />

      <main
        className={`flex-1 p-6 ${
          showSidebar ? "flex gap-6" : ""
        }`} // only flex if sidebar is shown
      >
        {/* Table Section */}
        <div
          className={`bg-white shadow rounded-2xl overflow-hidden ${
            showSidebar ? "flex-1" : "w-full"
          }`} // full width if no sidebar
        >
          <h2 className="text-xl font-semibold px-6 py-4">{title}</h2>
          <DataTable columns={columns} data={data} renderRow={renderRow} />
        </div>

        {/* Sidebar */}
        {showSidebar && <SidebarStats stats={stats} actions={actions} />}
      </main>
    </div>
  );
}

