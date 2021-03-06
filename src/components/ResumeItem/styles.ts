import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    color: #888;
    font-weight: bold;
    margin-bottom: 0.313rem;
`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;