import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </label>
);
