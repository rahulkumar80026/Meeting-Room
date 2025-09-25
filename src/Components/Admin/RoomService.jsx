// import React from "react";
// import { Eye, Pencil, Trash2, MoreVertical, Plus } from "lucide-react";
// import DataTable from "../common/DataTable";
// import SidebarStats from "../common/SidebarStats";
// import rooms from "../../data/roomsData";
// import API from "../../services/api"



// const handleView = (row) => {
//   console.log("Viewing meeting:", row);
//   // e.g. navigate(`/meetings/${row.id}`);
// };

// const handleEdit = (row) => {
//   console.log("Editing meeting:", row);
//   // e.g. open modal with row data
// };

// const handleDelete = (row) => {
//   console.log("Deleting meeting:", row);
//   // e.g. call API and update state
// };

// const handleMore = (row) => {
//   console.log("More options for:", row);
//   // e.g. show dropdown menu
// };

// export default function RoomsOverview() {
//   const columns = [
//     { key: "id", label: "ROOM ID ↓" },
//     { key: "name", label: "ROOM NAME ↓" },
//     {
//       key: "status",
//       label: "STATUS",
//       render: (row) => (
//         <span
//           className={
//             row.status === "Active" ? "text-green-500" : "text-red-500"
//           }
//         >
//           {row.status}
//         </span>
//       ),
//     },
//     { key: "booking", label: "LAST BOOKING ↓" },
//     { key: "type", label: "TYPE" },
//     { key: "issue", label: "LAST ISSUE ↓" },
//     {
//       key: "actions",
//       label: "ACTIONS",
//       render: (row) => (
//         <div className="flex gap-2">
//           <Eye
//             className="w-5 h-5 text-gray-600 cursor-pointer"
//             onClick={() => handleView(row)}
//           />
//           <Pencil
//             className="w-5 h-5 text-yellow-500 cursor-pointer"
//             onClick={() => handleEdit(row)}
//           />
//           <Trash2
//             className="w-5 h-5 text-red-500 cursor-pointer"
//             onClick={() => handleDelete(row)}
//           />
//           <MoreVertical
//             className="w-5 h-5 text-gray-600 cursor-pointer"
//             onClick={() => handleMore(row)}
//           />
//         </div>
//       ),
//     },
//   ];

//   const stats = [
//     { label: "Total", value: 71, bg: "bg-yellow-200" },
//     { label: "Inactive", value: 3, bg: "bg-yellow-300" },
//     { label: "Issues", value: 5, bg: "bg-red-200" },
//   ];

//   const actions = [
//     {
//       label: "Add Room",
//       icon: <Plus />,
//       onClick: () => console.log("Add Room"),
//     },
//     {
//       label: "Service Request",
//       icon: <Plus />,
//       onClick: () => console.log("Service Request"),
//     },
//   ];

//   return (
//     <main className="flex-1 p-6 flex gap-6 ">
//          {/* 🔹 Title */}
//       <h1 className="text-2xl font-bold text-gray-800">Rooms Overview</h1>
//       <DataTable columns={columns} data={rooms} />
//       <SidebarStats stats={stats} actions={actions} />
//     </main>
//   );
// }



import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, MoreVertical, Plus } from "lucide-react";
import DataTable from "../common/DataTable";
import SidebarStats from "../common/SidebarStats";
import API from "../../services/api"; // axios instance

const handleView = (row) => {
  console.log("Viewing room:", row);
};

const handleEdit = (row) => {
  console.log("Editing room:", row);
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
};

export default function RoomsOverview() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch rooms from backend
  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await API.get("/rooms");
      setRooms(res.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const columns = [
    { key: "roomId", label: "ROOM ID ↓" },
    { key: "name", label: "ROOM NAME ↓" },
    {
      key: "status",
      label: "STATUS",
      render: (row) => (
        <span
          className={row.status === "Active" ? "text-green-500" : "text-red-500"}
        >
          {row.status}
        </span>
      ),
    },
    { key: "lastBooking", label: "LAST BOOKING ↓" },
    { key: "type", label: "TYPE" },
    { key: "lastIssue", label: "LAST ISSUE ↓" },
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
            onClick={() => handleDelete(row, fetchRooms)}
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
    { label: "Total", value: rooms.length, bg: "bg-yellow-200" },
    {
      label: "Inactive",
      value: rooms.filter((r) => r.status === "Inactive").length,
      bg: "bg-yellow-300",
    },
    {
      label: "Issues",
      value: rooms.filter((r) => r.lastIssue && r.lastIssue !== "").length,
      bg: "bg-red-200",
    },
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
    <main className="flex-1 p-6 flex flex-col gap-6">
      {/* 🔹 Title */}
      <h1 className="text-2xl font-bold text-gray-800">Rooms Overview</h1>

      <div className="flex gap-6">
        {loading ? (
          <p>Loading rooms...</p>
        ) : (
          <>
            <DataTable columns={columns} data={rooms} />
            <SidebarStats stats={stats} actions={actions} />
          </>
        )}
      </div>
    </main>
  );
}
