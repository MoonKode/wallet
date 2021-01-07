/* eslint-disable react/prop-types */
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip,
} from 'recharts';
import {
  Container,
  LeftSide,
  RightSide,
  LegendContainer,
  Legend,
} from './styles';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartBoxProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string;
    }[]
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => (
  <Container>
    <LeftSide>
      <h2>{title}</h2>
      <LegendContainer>
        {
                    data.map((item) => (
                      <Legend key={item.name} color={item.color}>
                        <div>
                          {item.percent}
                          %
                        </div>
                        <span>{item.name}</span>
                      </Legend>
                    ))
                }
      </LegendContainer>
    </LeftSide>
    <RightSide>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount" name="valor">
            {
                                data.map((item) => (
                                  <Cell
                                    key={item.name}
                                    cursor="pointer"
                                    fill={item.color}
                                  />
                                ))
}
          </Bar>
          <Tooltip
            cursor={{ fill: 'none' }}
            formatter={(value) => formatCurrency(Number(value))}
          />
        </BarChart>
      </ResponsiveContainer>
    </RightSide>
  </Container>
);

export default BarChartBox;
