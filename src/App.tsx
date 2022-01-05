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
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Metodo para filtar a lista
  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );

  }, [list, currentMonth]);

  // Metodo para realização dos calculos
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <AppStyles.Container>

      <AppStyles.Header>
        <AppStyles.HeaderText>Sistema Financeiro</AppStyles.HeaderText>
      </AppStyles.Header>

      <AppStyles.Body>
        {/* Area de informações */}
        <InfoArea         
          currentMonth={currentMonth}
          onMontChange={handleMonthChange} 
          income={income}
          expense={expense}
        
        />

        {/* Area de inserção */}

        {/* Tabela de items */}
        <TableArea list={filteredList} />

      </AppStyles.Body>

    </AppStyles.Container>
  );
}

export default App;