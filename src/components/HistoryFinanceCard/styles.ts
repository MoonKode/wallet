import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
    background-color: ${(props) => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: all .3s;

    &:hover {
        opacity: .5;
        transform: translateX(10px); 
    }

    > div {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 15px;
    }
    div span {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const Tag = styled.div<ITagProps>`
    background-color: ${(props) => props.color};
    width: 10px;
    height: 60%;
    position: absolute;
    left: 0;

`;
