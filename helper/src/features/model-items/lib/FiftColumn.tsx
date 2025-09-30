import { useEffect, useRef, useState } from "react";
import useProductType from "../../../shared/lib/ProductType";

type FiftColumnProps = {
  cell: string;
  onChange?: (newValue: string) => void;
};

export default function FiftColumn({ cell, onChange }: FiftColumnProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(cell);
  const [showAll, setShowAll] = useState(false); // 👉 состояние для полной выдачи
  const products = useProductType();
  const ref = useRef<HTMLTableCellElement | null>(null);

  // синхронизируем локальное состояние с пропсом cell
  useEffect(() => {
    setSelected(cell);
    setShowAll(false); // сбрасываем флаг при смене ячейки
  }, [cell]);

  // префиксы из cell
  const prefixes = cell
    .split(/\s+/)
    .map(word => word.slice(0, 3).toLowerCase())
    .filter(Boolean);

  // фильтрация
  const filtered = products.filter(item =>
    prefixes.some(pref => item.toLowerCase().startsWith(pref))
  );

  // список к показу: либо полный, либо отфильтрованный
  const listToShow = showAll
    ? products
    : filtered.length > 0
    ? filtered
    : products;

  // закрытие при клике вне
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setShowAll(false); // закрываем и сбрасываем
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // подсветка выбранной ячейки
  const isChanged = selected !== cell;

  return (
    <td
      ref={ref}
      className={`relative pl-1 pr-1 border border-light-blue-500 cursor-pointer transition-colors
        ${isChanged ? "bg-green-100 border-green-400" : ""}`}
    >
      <div onClick={() => setOpen(v => !v)}>
        {selected}
      </div>

      {open && (
        <ul className="absolute top-full left-0 z-10 w-56 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded shadow-md">
          {listToShow.map(item => (
            <li
              key={item}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                setSelected(item);
                setOpen(false);
                setShowAll(false);
                onChange?.(item);
              }}
            >
              {item}
            </li>
          ))}

          {/* 👉 кнопка в конце */}
          {!showAll && (
            <li
              className="px-2 py-2 text-center text-blue-600 font-medium hover:bg-blue-50 cursor-pointer border-t"
              onClick={() => setShowAll(true)}
            >
              Показать весь список
            </li>
          )}
        </ul>
      )}
    </td>
  );
}
