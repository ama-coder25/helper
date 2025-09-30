// useColors.ts
import { useState, useEffect } from "react";

const STORAGE_KEY = "myColors";

export default function useColors() {
  const [colors, setColors] = useState<string[]>(() => {
    // при инициализации берём из localStorage или дефолтный массив
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [
      "C3I","MB001","UC001","M8119","UB101","FC145",
      "U7231","U1003","U1051","M8088","UA343","U8092",
      "UB022","UB133","U8122","U0002","FB180","FC196",
      "U8062","U9369","F1039","FC101","U0009","MC004",
      "MC237","U8105","CEF"
    ];
  });

  // при каждом изменении массива сохраняем в localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
  }, [colors]);

  return { colors, setColors };
}
