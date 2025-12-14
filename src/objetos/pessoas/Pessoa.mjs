//arquivo Pessoa.mjs
import Telefone from "./Telefone.mjs";

export default class Pessoa {
  #nome;
  #email;
  #telefones = [];
  #cpf;
  #dataNascimento;

  constructor(dados = {}) {
    this.setNome(dados.nome);
    this.setEmail(dados.email);
    this.setCPF(dados.cpf);
    this.setDataNascimento(dados.dataNascimento);
    if (dados.telefone) {
        this.addTelefone(new Telefone(dados.telefone));
    }
}

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    }
    return false;
  }

  getNome() {
    return this.#nome;
  }

  setEmail(email) {
    if (email) {
      this.#email = email;
      return true;
    }
    return false;
  }

  getEmail() {
    return this.#email;
  }

  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.addPessoa?.(this);
      return true;
    }
    return false;
  }

  getTelefones() {
    return this.#telefones;
  }

  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }

  setDataNascimento(dataNascimento) {
    if (dataNascimento) {
      this.#dataNascimento = dataNascimento;
      return true;
    }
    return false;
  }

  getDataNascimento() {
    return this.#dataNascimento;
  }
  getDados() {
    return {
        nome: this.#nome,
        email: this.#email,
        cpf: this.#cpf,
        dataNascimento: this.#dataNascimento,
        telefone: this.#telefones.map(t => t.getNumero())[0] // Pega o primeiro telefone
    };
  } 
}