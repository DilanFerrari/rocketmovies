import styled from 'styled-components'

export const Container = styled.button`
    max-width: 1121px;
    height: 222px;
    background-color: ${({ theme }) => theme.COLORS.PINK_200};
    border: none;
    padding: 32px;
    border-radius: 16px;
    text-align: start;
    
    h3 {
       font-size: 24px;
       margin-bottom: 8px;
       color: ${({ theme }) => theme.COLORS.WHITE_200};
    }

    ul {
        list-style: none;
        display: flex;
        gap: 6px;
        margin-bottom: 15px;
        li {
            > svg {
                width: 12px;
                height: 12px;
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

    p {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 41px;
        overflow: hidden;
        margin-bottom: 20px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    > footer {
        display: flex;
            > span {
            color: ${({ theme }) => theme.COLORS.WHITE_300};
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }
`
    