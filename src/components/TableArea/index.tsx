import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import * as TableStyles from './styles';


type Props = {
  list: Item[];
}

export const TableArea = ({ list }: Props) => {
  return (
    <TableStyles.Table>
      <thead>
        <tr>
          <TableStyles.TableHeadColumn width={100}>
            Data
          </TableStyles.TableHeadColumn>

          <TableStyles.TableHeadColumn width={130}>
            Categoria
          </TableStyles.TableHeadColumn>

          <TableStyles.TableHeadColumn>
            Título
          </TableStyles.TableHeadColumn>

          <TableStyles.TableHeadColumn width={150}>
            Valor
          </TableStyles.TableHeadColumn>
        </tr>
      </thead>

      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </TableStyles.Table>
  );
};
