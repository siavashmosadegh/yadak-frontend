import styled from 'styled-components';

export const AddressItemWrapper = styled.div`

    width: 80%;
    display: flex;
    border: 1px solid gray;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    .locationItemWrapper {
        width: 80px;
        height: auto
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 10px;
        svg {
            fill-rule: evenodd;
            clip-rule: evenodd;
            stroke-linejoin: round;
            stroke-miterlimit: 2;
        }
    }

    
    .contentWrapper {
        width: calc(100% - 160px);
        text-align: right;
    }

    .optionsItemWrapper {
        width: 80px;
        height: auto
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 10px;
        svg {
            width: 30px;
            height: 30px;
            fill: none;
        }
    }
`;