const Ouros = ["A", "B", "C", "D"];
const Bronze = ["E", "F", "G", "H"];
export const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const initData = () => {
  const chairs = [];
  rows.forEach((row, i) => {
    const items = [];
    let type = "";

     if (Ouros.indexOf(row) >= 0) {
      type = "Ouro";
    } else if (Bronze.indexOf(row) >= 0) {
      type = "Bronze";
    }
    columns.forEach((column, j) => {
      items.push({
        number: row + column,
        Ocupado: false,
        type,
        pos: [i, j]
      });
    });
    chairs.push(items);
  });
  return chairs;
};

export const chairs = initData();
