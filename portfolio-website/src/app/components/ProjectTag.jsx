import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  // styles buttons based on condition = selected
  const buttonStyles = isSelected
    ? "text-stone-200 border-yellow-600"
    : "text-[#ADB7BE] border-stone-200 hover:border-yellow-600";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-4 px-6 py-2 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
