import styled from 'styled-components';

const Button = styled.button`
  color: Black;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: white;
  border: 2px solid black;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

function StyledButton({onClick}) {
  return <Button onClick={onClick} >Click me</Button>;
}

export default StyledButton;
