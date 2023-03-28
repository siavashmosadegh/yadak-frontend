import styled from 'styled-components';

export const Wrapper = styled.div`
    // width: calc(100% - 300px);
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    p {
        margin: 0;
        padding: 0;
    }

    .title {
        text-align: right;
    }

    .changeEditText {
        color: rgb(87,183,202);
        font-size: 15px;
        font-weight: bold;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const LocationIconContainer = styled.div`
    width: auto;
    margin-top: 8px;
    margin-left: 5px;
    svg {
        width: 30px;
        height: 30px;
    }
`;

export const LeftArrowIconContainer = styled.div`
    width: auto;
    margin-right: 5px;
    padding-top: 5px;
    svg {
        width: 25px;
        height: 25px;
        fill: rgb(87,183,202);
    }
`;