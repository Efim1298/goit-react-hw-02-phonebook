import styled from 'styled-components';

export const Div = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #000;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  margin: 5px auto 0;
  border-radius: 4px;
  border: 2px solid #3498db;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
