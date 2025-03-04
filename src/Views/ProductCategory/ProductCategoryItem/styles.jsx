import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    p {
        font-size: 12px;
        font-weight: bold;
        margin-left: 3px;
    }
`;