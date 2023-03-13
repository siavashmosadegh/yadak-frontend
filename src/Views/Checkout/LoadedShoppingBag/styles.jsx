import styled from 'styled-components';

export const Wrapper = styled.div`
    width: calc(100% - 300px);
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding-inline: 20px;

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    .headerTitle {
        font-size: 20px;
        font-weight: bolder;
    }
`;

export const DeleteEverythingButton = styled.button`
    width: auto;
    display: flex;
    align-items: center;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.2);
    font-size: 15px;
    font-weight: bold;
    padding-left: 8px;
    padding-right: 0;
    border-radius: 10px;

    span {
        margin-bottom: 2px;
    }
`;

export const TrashIconContainer = styled.div`
    width: auto;
    svg {
        width: 40px;
        height: 40px;
    }
`;