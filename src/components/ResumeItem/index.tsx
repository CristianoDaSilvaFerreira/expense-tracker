import * as ResumeStyles from './styles';

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <ResumeStyles.Container>
            <ResumeStyles.Title>{title}</ResumeStyles.Title>
            <ResumeStyles.Info 
            color={color}>R$ {(value).toFixed(2)}</ResumeStyles.Info>
        </ResumeStyles.Container>
    );
}