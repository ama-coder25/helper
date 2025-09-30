//1
type ThirdColumnProps = { cell: string};

export default function  ThirdColumn({ cell }: ThirdColumnProps) {
  return (
    <td className="pl-1 pr-1 border-solid border-1 border-light-blue-500 cursor-pointer">
      {cell}
    </td>
  );
}