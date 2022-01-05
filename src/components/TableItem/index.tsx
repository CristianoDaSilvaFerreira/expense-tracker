import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import * as TableItemStyle from './styles';
import { categories } from '../../data/categories';

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
                <TableItemStyle.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </TableItemStyle.Category>
            </TableItemStyle.TableColumn>

            <TableItemStyle.TableColumn>
                {item.title}
            </TableItemStyle.TableColumn>

            <TableItemStyle.TableColumn>
                <TableItemStyle.Value color={categories[item.category].expense ? 'red' : '#27ae60'}>
                    R$ {(item.value).toFixed(2)}
                </TableItemStyle.Value>
            </TableItemStyle.TableColumn>
        </TableItemStyle.TableLine>
    );
}