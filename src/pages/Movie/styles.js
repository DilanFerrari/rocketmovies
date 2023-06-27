import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 123px auto;
    grid-template-areas: 
        "header"
        "content"
    ;
    > main {
        grid-area: content;
        padding: 40px 0;
    }
`

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;
    height: 581px;
    overflow-y: auto;
    > p {
        font-size: 16px;
        height: 336px;
        text-align: justify;
        width: 1113px;
    }
       
`

export const Title = styled.div`
    margin: 24px 0;
    display: flex;
    align-items: center;
    > h2 {
        font-weight: 500;
        font-size: 36px;
        margin-right: 14px;
    }
    ul {
        display: flex;
        list-style: none;
        li {
            margin: 0 5px;
            > svg {
            width: 20px;
            height: 20px;
            
            color: ${({ theme }) => theme.COLORS.PINK_100};
            fill: ${({ theme }) => theme.COLORS.PINK_100};
            }
            &:last-child {
                > svg {
                    fill: transparent;
                }
            }
        }
    }
`

export const Creation = styled.div`
    display: flex;
    align-items: center; 
`

export const User = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
        margin-right: 8px;
    }
    > h3 {
        font-weight: 400;
        font-size: 16px;
    }
`

export const Time = styled.div`
    display: flex;
    align-items: center;
    > svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    > h4 {
        font-weight: 400;
        font-size: 16px;
    }
`

export const Tags = styled.div`
    display: flex;
    margin: 40px 0;
`

export const BackToHome = styled(Link)``