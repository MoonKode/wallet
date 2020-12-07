import React from 'react'
import { Container } from './styles'

interface IselectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    
}
const SelectInput: React.FC<IselectInputProps> = ({options}) => {

    return (
        <Container>
            <select>
                {options.map((item) => (
                    <option value={item.value}>{item.label}</option>
                ))}
            </select>
        </Container>
    )
}

export default SelectInput