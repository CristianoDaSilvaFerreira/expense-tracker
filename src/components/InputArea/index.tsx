import { useState } from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';
import * as InputStyles from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);
    

    const handleAddEvent = () => {       
        let errors: string[] = [];

        // Verificando a data
        if (isNaN(new Date(dateField).getTime())) {
            errors.push('Data inválida!');
        }

        // Verificando a categoria
        if (!categoryKeys.includes(categoryField)) {
            errors.push('Categoria inválida ou não existe!');
        }

        // Verificando o título
        if (titleField === '') {
            errors.push('Preencha o título!');
        }

        // Verificando o Valor
        if (valueField <= 0) {
            errors.push('Valor inválido!');
        }

        // Verificando o tamanho
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                date: new Date(dateField),
                category: categoryField,
                title: titleField,
                value: valueField
            });
            clearField();
        }
        
    }

    const clearField = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return (
        <InputStyles.Container>

        <InputStyles.InputLabel>
          <InputStyles.InputTitle>Data</InputStyles.InputTitle>
          <InputStyles.Input 
            type="date" 
            value={dateField} 
            onChange={e => setDateField(e.target.value)} 
        />
        </InputStyles.InputLabel>

        <InputStyles.InputLabel>
          <InputStyles.InputTitle>Categoria</InputStyles.InputTitle>

          <InputStyles.Select 
            value={categoryField} 
            onChange={e => setCategoryField(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </InputStyles.Select>

        </InputStyles.InputLabel>

        <InputStyles.InputLabel>
          <InputStyles.InputTitle>Título</InputStyles.InputTitle>
          <InputStyles.Input 
            type="text" value={titleField} 
            onChange={e => setTitleField(e.target.value)} 
        />

        </InputStyles.InputLabel>

        <InputStyles.InputLabel>
          <InputStyles.InputTitle>Valor</InputStyles.InputTitle>
          <InputStyles.Input 
            type="number" 
            value={valueField} 
            onChange={e => setValueField(parseFloat(e.target.value))} 
        />
        </InputStyles.InputLabel>

        <InputStyles.InputLabel>
          <InputStyles.InputTitle>&nbsp;</InputStyles.InputTitle>
          <InputStyles.Button onClick={handleAddEvent}>Adicionar</InputStyles.Button>
        </InputStyles.InputLabel>
        
      </InputStyles.Container>
    );
}