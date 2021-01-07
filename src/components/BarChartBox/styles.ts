import styled from 'styled-components';

interface ILegendProps {
    color:string
}

export const Container = styled.div`
    width: 48%;
    min-height: 260px;
    margin: 10px 0;
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.white};
    border-radius: 7px;
    display:flex;
    
`;
export const LeftSide = styled.aside`
    padding: 30px 20px;

    >h2 {
        padding-left: 16px;
        margin-bottom: 10px;
    }

`;
export const RightSide = styled.main`
    flex: 1;
    min-height: 150px;
    display:flex;
    justify-content:center;
    padding-top: 35px;


`;

export const LegendContainer = styled.ul`
    list-style:none;
    height : 175px;
    overflow-y: scroll;


    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        color: ${(props) => props.theme.colors.secondary};
        border-radius: 10px;

    }
    ::-webkit-scrollbar-track {
        color: ${(props) => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    padding-left: 16px;

    >div{
        font-size: 14px;
        background-color: ${(props) => props.color};
        width: 40px;
        height: 40px;
        border-radius: 3px;
        display:flex;
        align-items:center;
        justify-content: center;
    }

    >span {
        margin-left: 10px;
    }
`;
