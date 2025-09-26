import React from "react";
import { Eye, Pencil, Trash2, MoreVertical, Plus } from "lucide-react";
import DataTable from "../common/DataTable";
import SidebarStats from "../common/SidebarStats";
import meetings from "../../data/meetingData";



const handleView = (row) => {
  console.log("Viewing meeting:", row);
  // e.g. navigate(`/meetings/${row.id}`);
};

const handleEdit = (row) => {
  console.log("Editing meeting:", row);
  // e.g. open modal with row data
};

const handleDelete = async (row, fetchRooms) => {
  try {
    await API.delete(`/rooms/${row._id}`);
    console.log("Deleted room:", row._id);
    fetchRooms(); // refresh data after delete
  } catch (error) {
    console.error("Error deleting room:", error);
  }
};

const handleMore = (row) => {
  console.log("More options for:", row);
  // e.g. show dropdown menu
};

export default function MeetingsOverview() {
  
  const columns = [
  { key: "id", label: "MEETING ID ↓" },
  { key: "title", label: "TITLE ↓" },
  {
    key: "status",
    label: "STATUS",
    render: (row) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          row.status === "Scheduled"
            ? "bg-blue-100 text-blue-600"
            : row.status === "Running"
            ? "bg-green-100 text-green-600"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {row.status}
      </span>
    ),
  },
  { key: "roomId", label: "ROOM ID ↓" },
  { key: "slot", label: "SLOT ↓" },
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
    { label: "Total Meetings", value: 35, bg: "bg-blue-200" },
    { label: "Running", value: 5, bg: "bg-green-200" },
    { label: "Scheduled", value: 12, bg: "bg-yellow-200" },
  ];

  const actions = [
    { label: "Add Meeting", icon: <Plus />, onClick: () => console.log("Add Meeting") },
    { label: "Assign Room", icon: <Plus />, onClick: () => console.log("Assign Room") },
  ];

  return (
    <main className="flex-1 p-6 flex gap-6">
      <DataTable columns={columns} data={meetings} />
      <SidebarStats stats={stats} actions={actions} />
    </main>
  );
}
