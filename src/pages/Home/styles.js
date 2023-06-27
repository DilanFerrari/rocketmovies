import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container =  styled.div`
    width: 100%;
    height: 100vh;

    margin-bottom: 60px;

    > main {
        max-width: 1137px;
        margin: 50px auto;
    } 
`

export const TitleAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 37px;

    > h2 {
        font-size: 32px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    > button {
        max-width: 207px;
    }
`
export const AddMovie = styled(Link)`
    max-width: 207px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    height: 48px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
        margin-right: 8px;
    }
`

export const AllFilms = styled.div`
    width: 100%;
    height: 716px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

