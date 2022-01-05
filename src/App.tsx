import { useState, useEffect } from 'react';
import * as AppStyles from './App.styles';

import { Item } from './types/Item';
import { Category } from './types/Category';

import { items } from './data/items'
import { categories } from './data/categories';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );

  }, [list, currentMonth]);

  return (
    <AppStyles.Container>

      <AppStyles.Header>
        <AppStyles.HeaderText>Sistema Financeiro</AppStyles.HeaderText>
      </AppStyles.Header>

      <AppStyles.Body>
        {/* Area de informações */}
        <InfoArea currentMonth={currentMonth} />

        {/* Area de inserção */}

        {/* Tabela de items */}
        <TableArea list={filteredList} />

      </AppStyles.Body>

    </AppStyles.Container>
  );
}

export default App;