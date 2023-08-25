import { Fragment } from "react";
import useSort from "../hooks/use-sort";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export default function Table({ data, template, ...rest }) {
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    template
  );

  const headerTemplate = template.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      sorting: () => (
        <th
          className="cursor-pointer hover:bg-gray-100 p-1"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center justify-center">
            {column.label}
            {icons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  const columns = headerTemplate.map((column) => {
    if (column.sorting) {
      return <Fragment key={column.label}>{column.sorting()}</Fragment>;
    }
    return (
      <th key={column.label} className="p-2">
        {column.label}
      </th>
    );
  });

  const rows = sortedData.map((rowData) => {
    const array = Object.values(rowData);
    return (
      <tr className="border-b" key={array[0]}>
        {array.map((item, index) => {
          if (String(item).includes("png")) {
            return (
              <td key={index}>
                <img src={item} alt="" />
              </td>
            );
          }
          return (
            <td className="p-2 text-center first-of-type:text-left" key={index}>
              {item}
            </td>
          );
        })}
      </tr>
      // <tr className="border-b" key={array[0]}>
      //   {array.map((item, index) => (
      //     <td className="p-2 text-center first-of-type:text-left" key={index}>
      //       {item}
      //     </td>
      //   ))}
      // </tr>
    );
  });
  const classes = twMerge(classNames(rest.className, 'table-auto border-spacing-4'))
  //return the html
  return (
    <table className={classes}>
      <thead>
        <tr className="border-b-2">{columns}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function icons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <MdKeyboardArrowUp />
        <MdKeyboardArrowDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <MdKeyboardArrowUp />
        <MdKeyboardArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <MdKeyboardArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <MdKeyboardArrowDown />
      </div>
    );
  }
}
