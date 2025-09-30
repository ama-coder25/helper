//принимаем логику и отрисоваваем таблицу включая кнопки
import useParseExcel from "../../../shared/lib/useParseExcel";
import UploadFile from "../lib/UploadFile"; //тело таблицы
export function ExcelTable() {


const { handleClick, fileRef, handleChange, newElem, } = useParseExcel();
const thStyle = "w-[200px] border border-gray-400 bg-gray-300"

  return (
    <>
        <button onClick={handleClick}>upload</button>
        <input
        ref={fileRef}
        type="file"
        onChange={handleChange}
        className="hidden"
        accept=".xlsx, xlx"
    />
    <table className="bg-neutral-200 text-xs ">
      <thead>
        <tr className="h-[10px]">
          <th className={thStyle}>Артикул</th>
          <th className={thStyle}>Артикул ИМ</th>
          <th className={thStyle}>Тип товара</th>
          <th className={`${thStyle} max-w-[50px]`}>Размер</th>
           <th className={thStyle}>Наименование им</th>
          <th className={`${thStyle} max-w-[50px]`}>Пол</th>
          <th className={thStyle}>Модель</th>
          {/* можно дописать нужные колонки */}
        </tr>
      </thead>
     <UploadFile data={newElem} /> 
    </table>
    </>
  );
}