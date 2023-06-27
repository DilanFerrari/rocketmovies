import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK_200 : theme.COLORS.PINK_100};

    border: none;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    > svg {
        margin-right: 8px;
    }
`