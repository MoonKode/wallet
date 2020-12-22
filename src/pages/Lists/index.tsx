import React, {useMemo, useState, useEffect} from 'react'
import { Container, Content, Filters } from './styles'
import { uuid } from 'uuidv4'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import listOfMonths from '../../utils/months'

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
    const [monthSelected, setmonthSelected] = useState<number>(new Date().getMonth() +1)
    const [yearSelected, setyearSelected] = useState<number>(new Date().getFullYear())
    const [frequencyFilterSelected, setfrenquencyFilterSelected] = useState<string[]>(['recorrente', 'eventual'])
    //route params
    const balanceType  = match.params.type
    
    // data
    const pageData = useMemo(() => {
        return balanceType === 'entry-balance' ?
            {
                title: 'Ganhos',
                lineColor: "#F7931B",
                data: gains,
            }
            :
            {

                title: 'Despesas',
                lineColor: "#E44C4E",
                data: expenses,
            }
    }, [balanceType])

    
    const years = useMemo(() => {
        const { data } = pageData
        let uniqueYears:number[] = [];
        data.forEach(item => {
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
    }, [pageData])

    
    const months = useMemo(() => {
        
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
       
    }, [])
   
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


    useEffect(() => {

        const { data } = pageData
        
        const filteredData = data.filter(item => {
            const date = new Date(item.date);
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);
        })

        const formattedData = filteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente'? '#4E41F0' : "#E44C4E"
            
            }
        })
        setdata(formattedData)
        
        
    }, [pageData, monthSelected, yearSelected, frequencyFilterSelected])



    
    const onHandleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);
        if (alreadySelected >= 0) {
            const filtered = frequencyFilterSelected.filter(item => item !== frequency)
            setfrenquencyFilterSelected(filtered)
        } else {
            setfrenquencyFilterSelected((prev) => [...prev, frequency])
        }
    }

    
    
    return (
        <Container>
            <ContentHeader
                title={pageData.title}
                lineColor={pageData.lineColor}                
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
            <Filters>
                <button
                    type="button"
                    className={`
                    tag-filter 
                    tag-filter-recurrent 
                    ${frequencyFilterSelected.includes('recorrente') && 'tag-activated'}`}
                    onClick={()=> onHandleFrequencyClick('recorrente')}
                    >
                        Recorrentes    
                </button>
                <button
                    type="button"
                    className={`tag-filter 
                    tag-filter-eventual 
                    ${frequencyFilterSelected.includes('eventual') && 'tag-activated'}`}
                    onClick={()=> onHandleFrequencyClick('eventual')}
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