import React from "react";

export default function SidebarStats({ stats, actions }) {
  return (
    <aside className="w-64 flex flex-col gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-lg p-4 shadow text-center ${stat.bg}`}
        >
          <p>{stat.label}</p>
          <h3 className="text-3xl font-bold">{stat.value}</h3>
        </div>
      ))}

      {actions?.map((action, idx) => (
        <button
          key={idx}
          onClick={action.onClick}
          className="flex items-center justify-center gap-2 bg-white shadow rounded-lg p-3 hover:bg-gray-50"
        >
          {action.icon} {action.label}
        </button>
      ))}
    </aside>
  );
}
