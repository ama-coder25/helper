//сборка колонок
// UploadFile.tsx
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";
import useColors from "../../../shared/lib/useColors";
import ThirdColumn from "./ThirdColumn";
import FourthColumn from "./FourthColumn";
import FiftColumn from "./FiftColumn";
import SixthColumn from "./SixthColumn";

type UploadFileProps = {
  data: (string)[][];
};

export default function UploadFile({ data }: UploadFileProps) {
  const { colors, setColors } = useColors();

  return (
    <tbody>
      {data.map((row, i) => (
        <tr className="h-[10px]" key={i}>
          <FirstColumn cell={row[0]} />
          <SecondColumn
            cell={row[0]}
            colors={colors}
            setColors={setColors}
            />
            <ThirdColumn cell={row[1]}/>
            <FourthColumn cell={row[2]}/>
            <FiftColumn cell={row[3]}/>
            <SixthColumn cell={row[4]}/>
        </tr>
      ))}
    </tbody>
  );
}
