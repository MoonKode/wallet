import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color:string
}

const animate = keyframes`
0%{
    transform: translateX(-100px);
    opacity: 0;
}
50%{
    opacity: .3;
}
100%{
    transform: translateX(0px);
    opacity: 1;
}
`;

export const Container = styled.div`
 width: 100%;
 height: 360px;
 background-color: ${(props) => props.theme.colors.tertiary};
 border-radius: 7px;
 padding: 50px 20px;
 margin: 10px 0;
 animation: ${animate}.5s;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    >h2 {
        margin-bottom: 20px;
    }
    @media(max-width:1200px){
      flex-direction:column;
    }
`;

export const LegendContainer = styled.ul`
    display: flex;
    list-style: none;

`;

export const Legend = styled.li<ILegendProps>`

  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;

  > div {
    font-size: 14px;
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span {
    margin-left: 10px;
    margin-right: 60px;
  }
  @media(max-width:1200px){
    >div{
      width: 30px;
      height: 30px;
    }
  }
`;
