import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// type ListViewProps = {
//   data: {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//   }[];
// };

const ListView = (): JSX.Element => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Recipe Name</TableHead>
          <TableHead>Protein</TableHead>
          <TableHead>Carbs</TableHead>
          <TableHead>Fat</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Linguine</TableCell>
          <TableCell>56g</TableCell>
          <TableCell>12g</TableCell>
          <TableCell>8g</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ListView;
