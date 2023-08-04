import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  border: 3px solid;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 3px solid;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  background: #3498db;
  transition: all 150ms ease-in-out;
  border-radius: 4px;
  border: none;

  &:hover {
    color: transparent;
    text-shadow: 0 0 2px #fff;
    box-shadow: 0 0 3px 0 #3498db inset, 0 0 3px 2px #3498db;
  }
`;
