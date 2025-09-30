type FirstColumnProps = { cell: string};

export default function FirstColumn({ cell }: FirstColumnProps) {
  return (
    <td className="pl-1 pr-1 border-solid border-1 border-light-blue-500 cursor-pointer">
      {cell}
    </td>
  );
}