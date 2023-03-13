import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    height: 40px;
`;

export const PlusIconContainer = styled.div`
    width: auto;
    margin-top: 3px;
    svg {
        width: 25px;
        height: 25px;
    }
`;

export const TrashIconContainer = styled.div`
    width: auto;
    margin-top: 3px;
    svg {
        width: 25px;
        height: 25px;
    }
`;