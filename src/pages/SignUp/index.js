import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/elixir-lang-ar21.svg";
import { Form, Container } from "./styles";

import api from "../../services/api";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    investment_limit: "",
    usa_stock_limit: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Portfolio Investment logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="number"
            step="0.01"
            min="0"
            placeholder="Limite de investimento"
            onChange={e => this.setState({ investment_limit: e.target.value })}
          />
          <input
            type="number"
            step="1"
            min="0"
            placeholder="Limite de compras para ações Americanas"
            onChange={e => this.setState({ usa_stock_limit: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password, investment_limit, usa_stock_limit} = this.state;
    if (!name || !email || !password || !investment_limit || !usa_stock_limit) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/users", { name, email, password, investment_limit, usa_stock_limit });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
      }
    }
  };
}

export default withRouter(SignUp);