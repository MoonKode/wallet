import React, { useState, useMemo } from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'
import MessageBox from '../../components/MessageBox'


import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import listOfMonths from '../../utils/months'

import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

import {
    Container,
    Content
} from './styles'

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
    
    // handlers
    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month)
            setmonthSelected(parseMonth)
        } catch (error) {
            throw new Error('invalid month value. Accepted values: 1 - 12')

        }
    }


    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year)
            setyearSelected(parseYear)
        } catch (error) {
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
                    amount={150.00}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="dollar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="Ganhos"
                    amount={5000.00}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="Despesas"
                    amount={4850.00}
                    footerText="Atualizado com base nos ganhos e nas despesas"
                    icon="arrowDown"
                    color="#E44C4E"
                />
                <MessageBox
                    title='Muito Bem!'
                    description='O seu saldo está positivo'
                    icon={happyImg}
                    footerText='Continue assim! Considere investir o seu saldo'
                />
            </Content>

        </Container>
    )
}

export default Dashboard