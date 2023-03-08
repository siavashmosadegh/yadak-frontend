import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 300px;
    height: 135px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    margin-right: 10px;

    @media (max-width: 1100px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 10px;
    }
`;