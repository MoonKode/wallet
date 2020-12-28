import React, { useState, useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'
import PieChartComponent from '../../components/PieChart'
import HistoryBox from '../../components/HistoryBox'


import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

import {
    Container,
    Content
} from './styles'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

const Dashboard: React.FC = () => {


    //state 
    const [monthSelected, setmonthSelected] = useState<number>(new Date().getMonth() +1)
    const [yearSelected, setyearSelected] = useState<number>(new Date().getFullYear())

    const years = useMemo(() => {
 
        let uniqueYears:number[] = [];
        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear()
            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })
        return uniqueYears.map(item => {
            return {
                value: item,
                label: item,
            }
        })
    }, [])

    
    const months = useMemo(() => {
        
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
       
    }, [])


    //dynamic stuff
    const totalExpenses = useMemo(() => {
        let total: number = 0
        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                    
                } catch {
                    throw new Error('Invalid amount ! Amount must be a number')
                }
            }

        })
        return total
    }, [monthSelected, yearSelected])


    const totalWinnings = useMemo(() => {
        let total: number = 0
        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            if (month === monthSelected && year == yearSelected) {
                try {
                    total += Number(item.amount)
                } catch {
                    throw new Error('Invalid amount!  Amount must be a number ')
                }
            }

        })
        return total;
        
    }, [monthSelected, yearSelected])


    const totalBalance = useMemo(() => {
        return totalWinnings - totalExpenses

    }, [totalWinnings, totalExpenses])



    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title:'Que triste !',
                description:'Este mês você gastou mais do que deveria!',
                icon: sadImg,
                footerText:'Verifique os seus gastos e tente cortar com algo desnecessário'
            }
        } else {
            return  {
                title:'Muito bem!',
                description:'O seu saldo está positivo',
                icon: happyImg,
                footerText:'Continue assim ! Considere investir o seu saldo!'
            }
        }
    }, [totalBalance])

    const relaTionExpenserVersusGains = useMemo(() => {
        const total = totalWinnings + totalExpenses
        const percentGains = (totalWinnings / total) * 100
        const percentExpenses = (totalExpenses / total) * 100
      
       const data = [
           {
               name: "Ganhos",
               value: totalWinnings,
               percent: Number(percentGains.toFixed(1)),
               color: "#F7931B"
           },
           {
               name: "Despesas",
               value: totalExpenses,
               percent: Number(percentExpenses.toFixed(1)),
               color: "#E44C4E"
            },
       ]
        return data
        
    }, [totalWinnings, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let amountGain = 0
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();
                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountGain += Number(gain.amount)
                    } catch {
                        throw new Error('amountGain is invalid. amountGain must be a valid number')
                    }
                }
            });
            let amountExpense = 0
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();
                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountExpense += Number(expense.amount)
                    } catch {
                        throw new Error('amountExpense is invalid. amountExpense must be a valid number')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),
                amountGain,
                amountExpense,
            }
        }).filter(item => {
            const currentMonth = new Date().getMonth()
            const currentYear = new Date().getFullYear()

            return(yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)
        })
    }, [yearSelected])

    // handlers
    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month)
            setmonthSelected(parseMonth)
        } catch {
            throw new Error('invalid month value. Accepted values: 1 - 12')

        }
    }


    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year)
            setyearSelected(parseYear)
        } catch {
            throw new Error('invalid year value. Only integers accepted')

        }
    }    

    
    
    
    return (
        <Container>
            <ContentHeader
                title="Dashboard"
                lineColor="#F7931B"
            >
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />
                <SelectInput
                    options={years}
                    onChange={(e) => handleYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>
            <Content>
                <WalletBox
                    title="Saldo"
                    amount={totalBalance}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="dollar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="Ganhos"
                    amount={totalWinnings}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="Despesas"
                    amount={totalExpenses}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    icon={message.icon}
                    footerText={message.footerText}
                />
                <PieChartComponent data={relaTionExpenserVersusGains} />
                <HistoryBox
                    data={historyData}
                    lineColorAmountGains="#F7931B"
                    lineColorAmoutExpenses="#E44C4E"
                />
            </Content>

        </Container>
    )
}

export default Dashboard