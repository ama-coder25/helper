// 2
import { useState, useEffect } from "react";

type SecondColumnProps = {
  cell: string | number | null;
  colors: string[];
  setColors: (colors: string[]) => void;
};

export default function SecondColumn({ cell, colors, setColors }: SecondColumnProps) {
  const cellStr = cell?.toString() || "";
  const foundColor = colors.find((color) => cellStr.includes(color));
  const displayValue = foundColor ? cellStr.split(`_${foundColor}`)[0] : cellStr;

  // если цвета нет
  const [isEditing, setIsEditing] = useState(!foundColor);
  const [newColor, setNewColor] = useState("");

  const handleAddColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor]);
    }
    setIsEditing(false);
    setNewColor("");
  };

  // если цвет появился 
  useEffect(() => {
    if (foundColor) setIsEditing(false);
  }, [foundColor]);

  return (
    <td
      className={`pl-1 pr-1 border-solid border-1 cursor-pointer ${
        !foundColor ? "bg-red-500 text-white" : "border-light-blue-500"
      }`}
    >
      {!isEditing && displayValue}
      {isEditing && (
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Введите новый цвет"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
            className="px-1"
          />
          <button onClick={handleAddColor} className="bg-green-500 text-white px-2">
            Добавить
          </button>
        </div>
      )}
    </td>
  );
}
