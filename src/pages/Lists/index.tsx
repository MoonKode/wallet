import React, {useMemo, useState, useEffect} from 'react'
import {Container, Content, Filters} from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {

    //State
    const [data, setdata] = useState<IData[]>([])
    const [monthSelected, setmonthSelected] = useState<string>(String(new Date().getMonth() +1))
    const [yearSelected, setyearSelected] = useState<string>(String(new Date().getFullYear()))
    //route params
    const { type } = match.params
    
    // data
    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])
    
    const title = useMemo(() => {
        return type === 'entry-balance' ? "Ganhos" : "Despesas"
    }, [type])
    
    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? "#F7931B" : "#E44C4E"
    }, [type])
    
    useEffect(() => {
        
        const filteredData = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected;
        })

        const formattedData = filteredData.map(item => {
            return {
                id: String(new Date().getTime()) + item.amount,
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente'? '#4E41F0' : "#E44C4E"
            
            }
        })
        setdata(formattedData)
        
        
    }, [listData, monthSelected, yearSelected])
    
    const months = [
        { value: 1, label: "Janeiro" },
        { value: 2, label: "Fevereiro" },
        { value: 3, label: "Março" },
        { value: 4, label: "Abril" },
        { value: 5, label: "Maio" },
        { value: 6, label: "Junho" },
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
        { value: 10, label: "Outubro" },
        { value: 11, label: "Novembro" },
        { value: 12, label: "Dezembro" },
    ]
    /* const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ] */

    const years = useMemo(() => {
        let uniqueYears:number[] = [];
        listData.forEach(item => {
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

    
    return (
        <Container>
            <ContentHeader
            title={title}
                lineColor={lineColor}
                
            >
                <SelectInput options={months} onChange={(e)=> setmonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setyearSelected(e.target.value)} defaultValue={yearSelected}/>
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