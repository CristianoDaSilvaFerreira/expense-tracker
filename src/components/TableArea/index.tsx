import * as TableStyles from './styles';

function TableArea() {
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

      </tbody>
    </TableStyles.Table>
  );
};

export default TableArea;
