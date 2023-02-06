import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${props => props.height}px;


    .loginRegisterText {
        text-align: right;
        font-weight: bold;
    }

    .description {
        text-align: right;
        margin-top: 50px;
    }

    h3 {
        text-align: center;
    }

    .box {
        padding-left: 20px;
        padding-right: 20px;
        width: 400px;
        height: 400px;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,0.2);
    }
`;