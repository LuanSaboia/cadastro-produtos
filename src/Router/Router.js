import React from "react"
import Home from "../views/home"
import CadastroProduto from "../views/produtos/cadastro"
import { HashRouter, Route, Routes } from 'react-router-dom'

export default () => {
  return(
    <HashRouter>
      <Routes>
        <Route exact path="/cadastro-produtos"
        element={<CadastroProduto/>} />
        <Route exact path="/"
        element={<Home/>} />
      </Routes>
    </HashRouter>
  );
};