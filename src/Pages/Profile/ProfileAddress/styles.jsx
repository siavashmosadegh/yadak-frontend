import styled from "styled-components";

export const ProfileAddressWrapper = styled.div`
    //width: 100%;
    border: 1px solid gray;
    border-radius: 20px;
    margin-right: 20px;
    //margin-left: 20px;

    h3 {
        text-align: right;
        margin-right: 20px;
    }

    .row {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .addNewAddress {
        margin-left: 20px;
        border: 1px solid gray;
        border-radius: 15px;
        p {
            color: red;
        }
    }

    .addresses {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;