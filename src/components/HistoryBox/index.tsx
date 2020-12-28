import React from 'react'
import {
    Container,
    Header,
    LegendContainer,
    Legend,

} from './styles'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
} from 'recharts'

interface IHistoryBoxProps {
    data: {
        month: string;
        amountGain: number;
        amountExpense: number;

    }[];
    lineColorAmountGains: string;
    lineColorAmoutExpenses: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountGains, lineColorAmoutExpenses, 
}) => (
        <Container>
            <Header>
                <h2>Histórico de saldo</h2>
                <LegendContainer>
                    <Legend color={lineColorAmountGains}>
                        <div>{}</div>
                        <span>Ganhos</span>

                    </Legend>
                    <Legend color={lineColorAmoutExpenses}>
                        <div>{}</div>
                        <span>Despesas</span>

                    </Legend>
                </LegendContainer>
            </Header>
        <ResponsiveContainer>
            <LineChart data={data} margin={{top:10,right:20,bottom:10,left:20}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                <XAxis dataKey="month" stroke="#cecece" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="amountGain"
                    name="Ganhos"
                    stroke={lineColorAmountGains}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{r:8}}
                    
                />
                <Line
                    type="monotone"
                    dataKey="amountExpense"
                    name="Despesas"
                    stroke={lineColorAmoutExpenses}
                    strokeWidth={5}
                    dot={{ r: 5 }}
                    activeDot={{r:8}}
                    
                />


            </LineChart>
        </ResponsiveContainer>
    </Container>

)
      


export default HistoryBox