import Produtos from "./Produtos";
import { ConteinerProdutos, CardProduto,ImageProduto, TitleProduto, DescricaoProduto, PrecoProduto} from "./componente/componente";


function Listaprodutos(){
    return(
        <ConteinerProdutos>
        {Produtos.map(produto =>(
          <CardProduto key={produto.Id}>
            <ImageProduto src={produto.img}/>
            <TitleProduto>{produto.Nome}</TitleProduto>
            <DescricaoProduto>{produto.Descricao}</DescricaoProduto>
            <PrecoProduto>R${produto.Preco.toFixed(2)}</PrecoProduto>
          </CardProduto>
        ))};
      </ConteinerProdutos>
    );
}
export default Listaprodutos;