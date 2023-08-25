import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (newIndex) => {
    setExpandedIndex((currentIndex) => {
      if (currentIndex === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
      </span>
    );

    return (
      <div key={index}>
        <div
          className="flex justify-between items-center p-3 bg-slate-50 border-b cursor-pointer capitalize"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
