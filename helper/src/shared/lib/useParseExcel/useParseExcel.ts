import { useRef, useState } from "react";
import * as XLSX from "xlsx";

export default function useParseExcel() {
  const [newElem, setNewElem] = useState<(string)[][]>([]);
  const fileRef = useRef<HTMLInputElement | null>(null);


  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target?.result;
      if (!data) return;

      const workbook = XLSX.read(data, { type: "array" });
      const wsname = workbook.SheetNames[0];
      const ws = workbook.Sheets[wsname];

      // Преобразуем Excel в массив массивов
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 }) as (string )[][];

      setNewElem(dataParse);
    };

    reader.readAsArrayBuffer(file);
  };

  



  return { handleClick, fileRef, handleChange, newElem, setNewElem };
}
