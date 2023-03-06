import styled from 'styled-components';

export const FilterModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;

    .header {
        height: 50px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding-inline: 15px;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        margin-bottom: 15px;
        svg {
            fill: #000000;
            width: 35px;
            height: 35px;
            padding-left: -5px;
        }
    }
`;