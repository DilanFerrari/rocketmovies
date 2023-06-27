import styled from 'styled-components'
import backgroundIMG from '../../assets/background.png'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: start;

    > button {
        margin-top: 16px;
    }
    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
` 

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundIMG}) no-repeat center center;
    background-size: cover;
`

export const BackToLogin = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
    text-decoration: none;
    text-align: center;
    > svg {
        margin-right: 8px;
    }
`