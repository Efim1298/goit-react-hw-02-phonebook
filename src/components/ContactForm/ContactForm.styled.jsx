import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border: 3px solid;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border: 1px solid black;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  font-size: 20px;
  border: none;
  color: #fff;
  background: #3498db;
  transition: all 150ms ease-in-out;

  &:hover {
    color: transparent;
    text-shadow: 0 0 2px #fff;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
