import * as ResumeStyles from './styles';

type Props = {
    title: string;
    value: number;
}

export const ResumeItem = ({ title, value }: Props) => {
    return (
        <ResumeStyles.Container>
            <ResumeStyles.Title>{title}</ResumeStyles.Title>
            <ResumeStyles.Info>R$ {value}</ResumeStyles.Info>
        </ResumeStyles.Container>
    );
}