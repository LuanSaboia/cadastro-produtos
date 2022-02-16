import React from "react";
import ProdutoService from "../../app/produtoService";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  sucesso: false,
};
export default class CadastroProduto extends React.Component {
  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = (event) => {
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
    }
    try{
      this.service.salvar(produto);
      this.limpaCampos();
      this.setState({ sucesso: true });
    } catch(erro){
      
    }
  };

  limpaCampos = () => {
    this.setState(estadoInicial);
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">Cadastro de Produto</div>
        <div className="card-body">
          {this.state.sucesso && (
            <div class="alert alert-dismissible alert-success">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Bem feito!</strong> Cadastro realizado com sucesso!
            </div>
          )}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  value={this.state.nome}
                  name="nome"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  value={this.state.sku}
                  name="sku"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição: </label>
                <textarea
                  value={this.state.descricao}
                  name="descricao"
                  onChange={this.onChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  value={this.state.preco}
                  name="preco"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  value={this.state.fornecedor}
                  name="fornecedor"
                  onChange={this.onChange}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-1">
              <button onClick={this.onSubmit} className="btn btn-success">
                Salvar
              </button>
            </div>
            <div className="col-md-1">
              <button onClick={this.limpaCampos} className="btn btn-primary">
                Limpar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
