import styled from "styled-components";

export const Button = styled.div`
  &:hover {
    transform: translateY(-2px);
  }
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  padding-top: 8px;
  align-self: center;
  width: ${props => (props.width ? props.width : null)};
  height: 35px;
  border: none;
  border-radius: 20px;
  background-color: rgba(16, 89, 255, 1);
  transition: all 0.3s ease;
`;
