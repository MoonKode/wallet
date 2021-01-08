/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable default-case */
import React from 'react';
import CountUp from 'react-countup';
import arrowDownImg from '../../assets/arrow-down.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import dollarImg from '../../assets/dollar.svg';
import {
  Container,
} from './styles';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerText: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerText,
  icon,
  color,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case 'dollar':
        return dollarImg;
      case 'arrowUp':
        return arrowUpImg;
      case 'arrowDown':
        return arrowDownImg;
    }
  };
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>€ </strong>
        <CountUp
          end={amount}
          prefix=""
          duration={2}
          separator="."
          decimal="."
          decimals={2}
        />
      </h1>
      <small>{footerText}</small>
      <img src={iconSelected()} alt={title} />

    </Container>
  );
};

export default WalletBox;
