import ProdutoCard from "./components/ProdutoCard";

function App() {
  const items = [
    {
      id: 1,
      imagem: "./img/arroz.png",
      nome: "Arroz Tio João Branco",
      preco: 9.98,
      preco_final: 9.98,
      produto_ativo: false,
      quantidade_unitaria: 1,
      incluso_carrinho: false,
      selecionado: false
    },
    {
      id: 2,
      imagem: "./img/feijao.png",
      nome: "Pacote de Feijão Carioca",
      preco: 7.99,
      preco_final: 7.99,
      produto_ativo: false,
      quantidade_unitaria: 1,
      incluso_carrinho: false,
      selecionado: false
    },
    {
      id: 3,
      imagem: "./img/macarrao.png",
      nome: "Macarrão de Sêmola",
      preco: 2.59,
      preco_final: 2.59,
      produto_ativo: false,
      quantidade_unitaria: 1,
      incluso_carrinho: false,
      selecionado: false
    },
    {
      id: 4,
      imagem: "./img/sal.png",
      nome: "Sal Refinado Lebre Pacote",
      preco: 2.79,
      preco_final: 2.79,
      produto_ativo: false,
      quantidade_unitaria: 1,
      incluso_carrinho: false,
      selecionado: false
    },
    {
      id: 5,
      imagem: "./img/cafe.png",
      nome: "Café em Pó 3 Corações",
      preco: 5.00,
      preco_final: 5.00,
      produto_ativo: false,
      quantidade_unitaria: 1,
      incluso_carrinho: false,
      selecionado: false
    }
  ]

  return (
    <div>
      <div className="text-center mt-5">
        <h3>App Produtos</h3>
      </div>
      <ProdutoCard items={items} />
    </div>
  );
}

export default App;
