import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import PhotoThumbnail from "pages/photos/PhotoThumbnail";

interface Props {
  data: unknown[];
}

// const asd = [
//   [{ photo }, { photo }, { photo }],
//   [{ photo }, { photo }, { photo }],
//   [{ photo }, { photo }, { photo }],
//   [{ photo }, { photo }, { photo }],
// ];

const createGridData = (rows: number, columns: number, data: any[]) => {
  return data.reduce((modifiedData, photo, index) => {}, []);
};

const Cell = ({ ...props }: GridChildComponentProps) => {
  const { style, rowIndex, columnIndex, data } = props;
  console.log("DATA", data[rowIndex]);
  return <div style={style}></div>;
};

const VirtualizedGrid: React.FC<Props> = ({ data }: Props) => {
  const rowCount = Math.ceil(data.length / 6);

  return (
    <Grid
      columnCount={6}
      rowCount={rowCount}
      columnWidth={150}
      rowHeight={150}
      height={800}
      width={918}
      itemData={data}
    >
      {Cell}
    </Grid>
  );
};

export default VirtualizedGrid;
