import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 0.625rem;
    padding: 1.25rem;
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 0.625rem;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 0.313rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 0.315rem;
    border: 1px solid lightblue;
    border-radius: 0.313rem;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 0.313rem;
    border: 1px solid lightblue;
    border-radius: 0.313rem;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 0.313rem;
    border: 1px solid lightblue;
    border-radius: 0.313rem;
    background-color: #17A031;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: #4CAF50;
        color: white;
    }
`;