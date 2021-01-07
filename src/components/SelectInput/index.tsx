/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';

interface IselectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    // eslint-disable-next-line no-unused-vars
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue?: string | number

}
const SelectInput: React.FC<IselectInputProps> = ({ options, onChange, defaultValue }) => (
  <Container>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map((item) => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  </Container>
);

export default SelectInput;
