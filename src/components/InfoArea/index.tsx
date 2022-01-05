import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { formatCurrentMonth } from '../../helpers/dateFilter';
import * as InfoStyles from './styles';

type Props = {
    currentMonth: string;   
}

export const InfoArea = ({ currentMonth}: Props) => {    
 
    return (
        <InfoStyles.Container>
            <InfoStyles.MonthArea>
                <InfoStyles.MonthArrow ><BsArrowLeftSquareFill />
                </InfoStyles.MonthArrow>
                    <InfoStyles.MonthTitle>
                        {formatCurrentMonth(currentMonth)}
                    </InfoStyles.MonthTitle>
                <InfoStyles.MonthArrow><BsArrowRightSquareFill />
                </InfoStyles.MonthArrow>
            </InfoStyles.MonthArea>
            <InfoStyles.ResumeArea>
                
            </InfoStyles.ResumeArea>
        </InfoStyles.Container>
    );
}