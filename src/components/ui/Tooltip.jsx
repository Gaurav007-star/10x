import React, { useState } from "react";

export default function Tooltip({ children, tableData, position = "top" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`
            absolute z-50 p-0 rounded-md w-[700px] max-[1025px]:w-[400px] bg-white text-black text-base
            transition-all duration-200 ${
              tableData?.headers?.length > 0 ? "border border-black" : ""
            }
            ${
              position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2"
            }
            ${
              position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2"
            }
            ${position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2"}
            ${position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2"}
          `}
        >
          {tableData && (
            <div className="overflow-x-auto">
              <table className="border-collapse text-left text-base w-full">
                <thead className="">
                  <tr>
                    {tableData.headers.map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-2 font-semibold bg-gray-100 border border-black"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="odd:bg-white even:bg-gray-50 max-[450px]:border-b max-[450px]:border-black"
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="px-4 py-2 border border-black "
                        >
                          {/* On mobile, show header before cell */}
                          <span className="font-semibold hidden ">
                            {tableData.headers[cellIndex]}:
                          </span>
                          <span className="">{cell}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
