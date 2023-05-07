import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    // padding: 20px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding-top: 15px;
    margin-right: 10px;
    height: 180px;

    .buttonContainer {
        padding-inline: 10px;
    }

    a {
        text-decoration: none;
    }

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
    padding-inline: 10px;
`;