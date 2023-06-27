import styled from 'styled-components'

export const Container = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    background-color: ${({ theme }) => theme.COLORS.BROWN};
`