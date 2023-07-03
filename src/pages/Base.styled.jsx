import styled from '@emotion/styled';

const Main = styled.main`
  padding: 20px 20px;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
`;
const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  margin-top: 20px;
  border: 1px solid black;
  padding: 10px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Form = styled.form`
display: flex;
text-align: center;
align-items: center;
margin-bottom: 20px;`;

const Input = styled.input`
  margin-right: 25px;
  width: 300px;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
`;
const Button = styled.button`
  cursor: pointer;
  width: 80px;
  height: auto;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Box = styled.div`
margin-top: 20px;
display: flex;
border: 1px solid black;
padding: 10px;
`
const TextBox = styled.div`
margin-top: 20px;
border: 1px solid black;
padding: 10px;
`

const Img = styled.img`
height: auto;
max-width: 100%;
display: block;`

const ImgBox = styled.div`
margin-right: 20px;`

const TextWrapper = styled.div`
max-width: 1000px;`

export {
  Main,
  List,
  Form,
  Input,
  Button,
  Box,
  TextBox,
  Img,
  ImgBox,
  ListBox,
  ListItem,
  TextWrapper
};
