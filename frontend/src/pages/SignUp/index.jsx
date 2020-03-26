import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/bb8.json";
import axios from "axios";
import "./styles.css";

export default function SignUp() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const fieldNome = document.getElementById("nome");
    const fieldIdade = document.getElementById("idade");
    const fieldEmail = document.getElementById("email");
    const fieldRG = document.getElementById("rg");
    const fieldCPF = document.getElementById("cpf");

    const fields = {
      nome: fieldNome.value,
      idade: fieldIdade.value,
      email: fieldEmail.value,
      rg: fieldRG.value,
      cpf: fieldCPF.value
    };

    try {
      const response = await axios.post("http://localhost:3333/", fields);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <Lottie
          options={defaultOptions}
          width={120}
          height={120}
          isClickToPauseDisabled
        />
        <strong>Cadastro</strong>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
        <label htmlFor="idade">Idade</label>
        <input type="text" name="idade" id="idade" />
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="rg">RG</label>
        <input type="text" name="rg" id="rg" />
        <label htmlFor="cpf">CPF</label>
        <input type="text" name="cpf" id="cpf" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
