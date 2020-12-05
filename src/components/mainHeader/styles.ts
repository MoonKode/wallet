import styled from 'styled-components'

export const Container = styled.div`
grid-area: MH;
display: flex;
justify-content: space-between;
background-color: ${(props) => props.theme.colors.secondary};
align-items:center;
padding: 0 10px;
border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;
export const Welcome = styled.h3``;
export const UserName = styled.span``;




