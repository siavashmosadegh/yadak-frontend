import styled from 'styled-components';

export const ProductWrapper = styled.div`
    padding: 20px;
    // padding-bottom: 100px;
    overflow-x: hidden;
`;

export const RoutingSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: flex-start;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 5px;
`;

export const RoutingItem = styled.div`

    .titleDiv {
        width: auto;
        margin-left: 10px;
        margin-right: 10px;
    }

    font-size: 13px;
    color: gray;
    width: auto;
    display: flex;
    align-items: space-between;
    flex-direction: row-reverse;
`;

export const FirstSectionWrapper = styled.div`
    display: flex;

    @media (max-width: 1100px) {
        display: none;
    }
`;

export const RightDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 30%;
    // border: 1px solid red;

    .icons {
        width: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        svg {
            margin-bottom: 8px;
        }
    }

    .picture {
        width: calc(100% - 40px);

        img {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 1100px) {
        width: 100%;
        flex-direction: column;

        .icons {
            width: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
    
            svg {
                margin-right: 8px;
            }
        }
    
        .picture {
            width: 100%;
    
            img {
                width: 100%;
                height: auto;
            }
        }
    }
`;

export const LeftDiv = styled.div`
    width: 70%;
    // border: 1px solid blue;

    h3 {
        text-align: right;
    }

    .description {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const FirstSectionResponsiveWrapper = styled.div`
    display: none;

    h3 {
        text-align: right;
    }

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const PriceSectionResponsive = styled.div`
    display: none;
    position: fixed;
    bottom: 0;
    z-index: 100;
    height: 100px;
    background-color: gray;
    width: 100%;
    margin-left: -20px;
    padding-bottom: 20px;


    p {
        padding-left: 10px;
    }

    .priceAndButton {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 10px;

        button {
            width: 50%;
            background-color: red;
            color: white;
            border: none;
            height: 50px;
            font-size: 15px;
            font-weight: bold;
            border-radius: 10px;
        }
    }

    @media (max-width: 1100px) {
        display: initial;
    }
`;