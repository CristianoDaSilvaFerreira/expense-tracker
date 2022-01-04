import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as TableItemStyle from './styles';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <TableItemStyle.TableLine>
            <TableItemStyle.TableColumn>
                {formatDate(item.date)}
            </TableItemStyle.TableColumn>

            <TableItemStyle.TableColumn>
                {item.category}
            </TableItemStyle.TableColumn>

            <TableItemStyle.TableColumn>
                {item.title}
            </TableItemStyle.TableColumn>
            
            <TableItemStyle.TableColumn>
                R$ {item.value}
            </TableItemStyle.TableColumn>
        </TableItemStyle.TableLine>
    );
}