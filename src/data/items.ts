/* eslint-disable no-octal */
import { Item } from '../types/Item';

export const items: Item[] = [
    { 
        date: new Date(2021, 12, 4),
        category: 'food',
        title: 'McDonoalds',
        value: 32.65
    },

    { 
        date: new Date(2021, 12, 4),
        category: 'food',
        title: 'Burger King',
        value: 38.00
    },

    { 
        date: new Date(2021, 12, 4),
        category: 'rent',
        title: 'Aluguel Apt',
        value: 580.00
    },

    { 
        date: new Date(2022, 1, 4),
        category: 'salary',
        title: 'Salário ACME',
        value: 6500
    },
];