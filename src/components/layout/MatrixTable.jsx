import React, { useState } from "react";
import { motion } from "framer-motion";

const columns = [
  "FLN",
  "Teacher Training",
  "Gamification",
  "Assessment (LOFT)",
  "Pedagogy & Data Analytics",
  "Career & Mental Health",
  "Learning Disabilities",
  "Content Accreditation"
];

const rows = [
  { title: "Operational Efficiency", color: "#01012B" },
  { title: "Reduced Time on Non-Teaching", color: "#1F41AE" },
  { title: "Personalized Learning", color: "#C094DF" },
  { title: "Personalized Assessment", color: "#87ADFE" },
  { title: "Community Participation", color: "#4EC4F0" },
  {
    title: "Collaborative Teaching, Exposure, and Ownership",
    color: "#87ADFE"
  },
  { title: "Inclusive of Learning Disabilities", color: "#1F41AE" },
  { title: "Equality of Opportunity", color: "#C094DF" },
  { title: "Pedagogical Innovation", color: "#87ADFE" },
  { title: "Contextual and Observational Learning", color: "#01012B" }
];

const matrix = [
  [0, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 0, 1, 1]
];

const MatrixTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);
  const [hoveredCell, setHoveredCell] = useState({ row: null, col: null });

  return (
    <div className="overflow-hidden p-4 cursor-pointer w-[90%] font-serif mx-auto">
      <table className="w-full h-max border-collapse">
        <thead>
          <tr>
            <th className="p-2 bg-white"></th>
            {columns.map((col, colIndex) => (
              <motion.th
                key={colIndex}
                className="w-[200px] p-2 text-[18px] transition-all duration-200"
                style={{
                  color:
                    hoveredCol === colIndex || hoveredCell.col === colIndex
                      ? rows[hoveredCell.row]?.color || "#000"
                      : "#000"
                }}
                onMouseEnter={() => setHoveredCol(colIndex)}
                onMouseLeave={() => setHoveredCol(null)}
                animate={{
                  scale:
                    hoveredCol === colIndex || hoveredCell.col === colIndex
                      ? 1.05
                      : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {col}
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              animate={{
                scale: hoveredRow === rowIndex ? 1.03 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <th
                className="p-2 w-[200px] text-[16px] text-left transition-all duration-200"
                style={{
                  color:
                    hoveredRow === rowIndex || hoveredCell.row === rowIndex
                      ? row.color
                      : row.color
                }}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {row.title}
              </th>
              {columns.map((_, colIndex) => {
                const isHovered =
                  hoveredRow === rowIndex ||
                  hoveredCol === colIndex ||
                  (hoveredCell.row === rowIndex &&
                    hoveredCell.col === colIndex);

                const applyColor =
                  hoveredRow === rowIndex || hoveredCol === colIndex
                    ? row.color
                    : hoveredCell.row === rowIndex &&
                      hoveredCell.col === colIndex
                    ? row.color
                    : "";

                return (
                  <motion.td
                    key={colIndex}
                    className="p-2 text-center h-[50px] transition-all duration-200 text-white"
                    style={{
                      backgroundColor:
                        isHovered && applyColor
                          ? applyColor
                          : matrix[rowIndex][colIndex] === 1
                          ? "#1E293B"
                          : "#CBD5E1",
                      border: "none"
                    }}
                    onMouseEnter={() =>
                      setHoveredCell({ row: rowIndex, col: colIndex })
                    }
                    onMouseLeave={() =>
                      setHoveredCell({ row: null, col: null })
                    }
                    animate={{
                      scale:
                        hoveredCell.row === rowIndex &&
                        hoveredCell.col === colIndex
                          ? 1.15
                          : isHovered
                          ? 1.1
                          : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{matrix[rowIndex][colIndex]}</span>
                  </motion.td>
                );
              })}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatrixTable;
