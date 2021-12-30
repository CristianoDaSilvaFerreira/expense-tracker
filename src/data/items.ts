/* eslint-disable no-octal */
import { Item } from '../types/Item';

export const items: Item[] = [
    { 
        date: new Date(2021, 11, 28),
        category: 'cine',
        title: 'Cinema',
        value: 40.85
    },
    { 
        date: new Date(2021, 11, 28),
        category: 'food',
        title: 'Pipoca',
        value: 38.00
    },
    { 
        date: new Date(2021, 11, 28),
        category: 'food',
        title: 'McDonoalds',
        value: 32.65
    },

    { 
        date: new Date(2021, 10, 09),
        category: 'salary',
        title: 'Salário ACME',
        value: 6500
    },
];