//FourthColumn
type FourthColumnProps = { cell: string };

export default function FourthColumn({ cell }: FourthColumnProps) {
  
  
  const displayValue = cell.replace(", ." , "")

  return (
    <td className="pl-1 pr-1 border-solid border-1 border-light-blue-500 cursor-pointer">
      {displayValue}
    </td>
  );
}
