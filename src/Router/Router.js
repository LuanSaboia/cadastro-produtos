import React from "react"
import Home from "../views/home"
import CadastroProduto from "../views/produtos/cadastro"
import ConsultaProdutos from "../views/produtos/consulta"
import { Route, Switch } from 'react-router-dom'

export default () => {
  return(
    
      <Switch>
        <Route exact path="/cadastro-produtos/:sku?"
        component={CadastroProduto} />
        <Route exact path="/consulta-produtos"
        component={ConsultaProdutos} />
        <Route exact path="/"
        component={Home} />
      </Switch>

  );
};
