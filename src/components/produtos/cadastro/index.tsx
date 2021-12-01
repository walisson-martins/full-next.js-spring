import { Input, Layout } from "components";
import { useState } from "react";

export const CadastroProdutos: React.FC = () => {
  const [sku, setSku] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [nomeProduto, setNomeProduto] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const submit = () => {
    const produto = [sku, preco, nomeProduto, descricao];
    console.log(produto);
  };

  return (
    <Layout titulo="Produtos">
      <div className="columns">
        <Input
          id="inputSku"
          label="SKU: *"
          columnClasses="is-half"
          onChange={setSku}
          value={sku}
          placeholder="Digite o SKU do produto"
        />
        <Input
          id="inputPreco"
          label="Preço: *"
          columnClasses="is-half"
          onChange={setPreco}
          value={preco}
          placeholder="Digite o preço do produto"
        />
      </div>
      <div className="columns">
        <Input
          id="inputNome"
          label="Nome: *"
          columnClasses="is-full"
          onChange={setNomeProduto}
          value={preco}
          placeholder="Digite o nome do produto"
        />
      </div>
      <div className="columns">
        <div className="field column is-full">
          <label className="label" htmlFor="inputNome">
            Descrição: *
          </label>
          <div className="control ">
            <textarea
              id="inputNome"
              className="textarea"
              placeholder="Digite o descrição detalhada do produto"
              onChange={(event) => setDescricao(event.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="contro is-linkl">
          <button className="button" onClick={submit}>
            Salvar
          </button>
        </div>
        <div className="control">
          <button className="button">Voltar</button>
        </div>
      </div>
    </Layout>
  );
};
