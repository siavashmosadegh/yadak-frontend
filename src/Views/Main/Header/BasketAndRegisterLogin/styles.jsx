import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 18px;
    padding-right: 18px;

    .loginDiv {
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-opacity: 0.1;
        border-radius: 8px;
        height: 35px;
        width: 125px;
        justify-content: center;
        text-decoration: none;
    }

    .textContainer {
        font-size: 13.5px;
        margin-bottom: 4px;
        text-decoration: none;
    }
`;

export const BasketIconContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    // margin-bottom: 5px;
    svg {
        fill: black;
        width: 25px;
        height: 25px;
    }
`;

// export const LoginIconContainer = styled.div`
//     width: auto;
//     margin-left: 7px;
//     margin-top: 3px;
//     svg {
//         fill: black;
//         width: 25px;
//         height: 25px;
//     }
// `;

export const PersonAndReverseTriangleContainer = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 10px;
    background-color: ${(props) => props.showProfileDiv === true ? "rgb(253,236,238)" : "null"};
    border-radius: 5px;
`;

export const ReverseTriangleIconContainer = styled.div`
    width: auto;
    margin-bottom: 5px;
    svg {
        width: 10px;
        height: 10px;
    }
`;

export const PersonIconContainer = styled.div`
    width: auto;

    svg { 
        width: 25px;
        height: 25px;
    }
`;

export const ProfileItemsContainer = styled.div`
    position: absolute;
    top: 30px;
    background-color: white;
    z-index: 2;
    width: 250px;
    border-radius: 10px;
    border: 1px solid black;

    .singleItem {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding-inline: 8px;
        // border-bottom: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;

        :hover {
            background-color: rgb(241,242,244);
        }
    }

    .profileItem {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        height: 50px;
        border-radius: 10px;

        :hover {
            background-color: rgb(241,242,244);
        }

        .profileItemTitle {
            font-size: 13px;
            font-weight: bold;
            border-top: 1px solid rgba(0,0,0,0.1);
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        svg {
            margin-left: 10px;
            margin-right: 10px;
        }
    }

    .leftArrowIconContainer {
        width: 20px;
        height: 20px;
    }

    .personIconAndName {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        span {
            margin-right: 7px;
            font-size: 13px;
            font-weight: bold;
        }
    }
`;