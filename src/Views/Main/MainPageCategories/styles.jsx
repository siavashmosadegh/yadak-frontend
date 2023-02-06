import styled from 'styled-components';
import { Grid } from '@mui/material';

export const Root = styled.div`
    h3 {
        text-align: center;
    }
`;

export const StyledGrid = styled(Grid)`
    padding: 10px;
    // border: 1px solid blue;
    color: black;
    img {
        width: 100%;
    }
`;