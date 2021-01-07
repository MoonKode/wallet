/* eslint-disable react/prop-types */
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import {
  Container,
  LeftSide,
  Legend,
  RightSide,
  LegendContainer,

} from './styles';

interface IPieChartProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[]
}

const PieChartComponent: React.FC<IPieChartProps> = ({
  data,
}) => (
  <Container>
    <LeftSide>
      <h2>Relação</h2>
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
        <PieChart>
          <Pie data={data} dataKey="percent">
            {
                                data.map((item) => (
                                  <Cell key={item.percent} fill={item.color} />
                                ))
                            }
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </RightSide>

  </Container>
);

export default PieChartComponent;
