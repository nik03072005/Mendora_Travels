import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("Activities");

  const tabs = ["Tours", "Activities", "Group Tours"];

  return (
    <div className="bg-white py-1 w-auto   rounded-md px-4  flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-1.25 py-2 rounded-md font-medium transition-all duration-200 ${
            activeTab === tab
              ? "bg-red-600 text-white"
              : "text-red-600 hover:bg-red-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
