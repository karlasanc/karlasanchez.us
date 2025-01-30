import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  // styling classes based on active tab
  const buttonClasses = active ? "text-white border-primary-500 border-b" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
