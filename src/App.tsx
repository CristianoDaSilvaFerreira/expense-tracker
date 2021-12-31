import { useState, useEffect } from 'react';
import * as AppStyles from './App.styles';

import { Item } from './types/Item';
import { Category } from './types/Category';

import { items } from './data/items'
import { categories } from './data/categories';

import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter';
import TableArea from './components/TableArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( FilterListByMonth(list, currentMonth) );

  }, [list, currentMonth]);

  return (
    <AppStyles.Container>

      <AppStyles.Header>
        <AppStyles.HeaderText>Sistema Financeiro</AppStyles.HeaderText>
      </AppStyles.Header>

      <AppStyles.Body>
        {/* Area de informações */}

        {/* Area de inserção */}

        {/* Tabela de items */}
        <TableArea />

      </AppStyles.Body>

    </AppStyles.Container>
  );
}

export default App;