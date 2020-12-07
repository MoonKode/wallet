import React from 'react'
import {Container, Content, Filters} from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import { Button } from 'react-native'

const List: React.FC = () => {

    const months = [
        { value: 7, label: "Julho" },
        { value: 8, label: "Agosto" },
        { value: 9, label: "Setembro" },
    ]
    const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ]
    return (
        <Container>
            <ContentHeader
            title="OutGoings"
            lineColor="#E44C4E"
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
                <HistoryFinanceCard
                    amount="€ 1234"
                    tagColor="#E44C4E"
                    title="Conta da luz"
                    subtitle="07/12/2020"
                />
         

            </Content>
        </Container>
    )
}

export default List