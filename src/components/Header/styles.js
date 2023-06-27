import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    margin: 0 auto;

    height: 116px;
    width: 100%;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 80px;

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`

export const Search = styled.div`
    max-width: 630px;
    width: 100%;
    margin: 25px;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        text-align: end;
        a {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

        strong {
            font-size: 14px;    
            color: ${({ theme }) => theme.COLORS.WHITE_200};
        }
    }
`