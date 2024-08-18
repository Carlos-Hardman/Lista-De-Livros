import styled from "styled-components";

export const ConteinerProdutos = styled.div`
margin-top:80px;
margin-left:150px;
  display:flex;
  flex-wrap: wrap;
  text-align:center;

`;
export const CardProduto = styled.div`
border:solid black 2px;
border-radius:20px;
  margin-right:40px;
  margin-bottom:30px;
  padding-top:20px;
  list-style:none;
  width:265px;
`;

export const ImageProduto = styled.img`
width:220px;`;

export const TitleProduto = styled.h2`
text-align:center;
font-size:20px;
font-family:arial;`

export const DescricaoProduto = styled.p`
text-align:center;
font-family:arial;

`;
export const PrecoProduto = styled.p`
border:solid greenyellow;
background:greenyellow;
color:white;
`;