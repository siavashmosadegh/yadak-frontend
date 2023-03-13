import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    padding: 20px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-right: 10px;
    height: 180px;

    p {
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1100px) {
        width: 100%;
        margin-right: 0px;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.color == "gray" ? "#808080" : props.color == "black" ? "#000000" : "#FF0000"};
    margin-bottom: 20px;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: red;
    color: white;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
`;