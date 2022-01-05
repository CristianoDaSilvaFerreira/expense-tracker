import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { formatCurrentMonth } from '../../helpers/dateFilter';
import * as InfoStyles from './styles';
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;   
    onMontChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = (
    { 
        currentMonth, 
        onMontChange, 
        income, 
        expense 
    }: Props) => {   
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 )
        onMontChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 )
        onMontChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
 
    return (
        <InfoStyles.Container>
            <InfoStyles.MonthArea>

                <InfoStyles.MonthArrow onClick={handlePrevMonth}><BsArrowLeftSquareFill />
                </InfoStyles.MonthArrow>

                    <InfoStyles.MonthTitle>
                        {formatCurrentMonth(currentMonth)}
                    </InfoStyles.MonthTitle>

                <InfoStyles.MonthArrow onClick={handleNextMonth}><BsArrowRightSquareFill />
                </InfoStyles.MonthArrow>

            </InfoStyles.MonthArea>

            <InfoStyles.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={income - expense} />
            </InfoStyles.ResumeArea>
        </InfoStyles.Container>
    );
}