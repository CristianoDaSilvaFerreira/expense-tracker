import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', color: '#fdb032', expense: true },
    rent: { title: 'Aluguel', color: '#785131', expense: true },
    salary: { title: 'Salário', color: '#17A031', expense: false },
    payment: { title: 'Pagamento', color: '#1C7947', expense: false },
    installment: { title: 'Internet', color: '#FFC900', expense: true },
    phone_bill: { title: 'Conta Telefônica', color: '#FFA400', expense: false },
    water_bill: { title: 'Conta de Água', color: '#F0A500', expense: false },
    energy_bill: { title: 'Conta de Energia', color: '#FEC260', expense: false },
    other: { title: 'Outros', color: '#FF7272', expense: false },
}