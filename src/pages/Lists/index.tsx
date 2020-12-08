import React, {useMemo, useState, useEffect} from 'react'
import {Container, Content, Filters} from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: number;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {

    
    const [data, setdata] = useState<IData[]>([])
    const { type } = match.params
    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? "Ganhos" : "Despesas"
    }, [type])
    
    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? "#F7931B" : "#E44C4E"
    }, [type])
    
    const months = [
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
    ]
    useEffect(() => {

        const response = listData.map(item => {
            return {
                id: Math.random() * data.length,
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: item.frequency === 'recorrente'? '#4E41F0' : "#E44C4E"
            }
        })
        setdata(response)

        
    }, [])
    const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ]
    return (
        <Container>
            <ContentHeader
            title={title}
            lineColor={lineColor}
            >
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                Recorrentes    
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                Eventuais    
                </button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                        key={item.id}
                        amount={item.amountFormatted}
                        tagColor={item.tagColor}
                        title={item.description}
                        subtitle={item.dateFormatted}
                        />
                    ))
         
                }

            </Content>
        </Container>
    )
}

export default List