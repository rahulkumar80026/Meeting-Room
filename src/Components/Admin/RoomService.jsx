import React from "react";
import { Eye, Pencil, Trash2, MoreVertical, Plus } from "lucide-react";
import DataTable from "../common/DataTable";
import SidebarStats from "../common/SidebarStats";
import rooms from "../../data/roomsData";



const handleView = (row) => {
  console.log("Viewing meeting:", row);
  // e.g. navigate(`/meetings/${row.id}`);
};

const handleEdit = (row) => {
  console.log("Editing meeting:", row);
  // e.g. open modal with row data
};

const handleDelete = (row) => {
  console.log("Deleting meeting:", row);
  // e.g. call API and update state
};

const handleMore = (row) => {
  console.log("More options for:", row);
  // e.g. show dropdown menu
};

export default function RoomsOverview() {
  const columns = [
    { key: "id", label: "ROOM ID ↓" },
    { key: "name", label: "ROOM NAME ↓" },
    {
      key: "status",
      label: "STATUS",
      render: (row) => (
        <span
          className={
            row.status === "Active" ? "text-green-500" : "text-red-500"
          }
        >
          {row.status}
        </span>
      ),
    },
    { key: "booking", label: "LAST BOOKING ↓" },
    { key: "type", label: "TYPE" },
    { key: "issue", label: "LAST ISSUE ↓" },
    {
      key: "actions",
      label: "ACTIONS",
      render: (row) => (
        <div className="flex gap-2">
          <Eye
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() => handleView(row)}
          />
          <Pencil
            className="w-5 h-5 text-yellow-500 cursor-pointer"
            onClick={() => handleEdit(row)}
          />
          <Trash2
            className="w-5 h-5 text-red-500 cursor-pointer"
            onClick={() => handleDelete(row)}
          />
          <MoreVertical
            className="w-5 h-5 text-gray-600 cursor-pointer"
            onClick={() => handleMore(row)}
          />
        </div>
      ),
    },
  ];

  const stats = [
    { label: "Total", value: 71, bg: "bg-yellow-200" },
    { label: "Inactive", value: 3, bg: "bg-yellow-300" },
    { label: "Issues", value: 5, bg: "bg-red-200" },
  ];

  const actions = [
    {
      label: "Add Room",
      icon: <Plus />,
      onClick: () => console.log("Add Room"),
    },
    {
      label: "Service Request",
      icon: <Plus />,
      onClick: () => console.log("Service Request"),
    },
  ];

  return (
    <main className="flex-1 p-6 flex gap-6 ">
      <DataTable columns={columns} data={rooms} />
      <SidebarStats stats={stats} actions={actions} />
    </main>
  );
}
