import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom'; 

export const Button = styled(LinkR)`
  border-radius: 10px;
  background: #665df5;
  white-space: nowrap;
  padding: 14px 48px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &: hover {
    transition: all 0.2s ease-in-out;
    background: #222;
  }
`
//border-radius: 10px;
//background: ${({ primary }) => (primary ? '#fff' : '#665df5')};
//white-space: nowrap;
//padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
// color: ${({dark}) => (dark ? '#010606' : '#fff')};
// font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
// outline: none;
// border: none;
// cursor: pointer;
// display: flex;
// justify-content: center;
// align-items: center;
// transition: all 0.2s ease-in-out;

// &:hover {
//   transition: all 0.2s ease-in-out;
//   background: ${({ primary }) => (primary ? '#222' : '#222')};
// }