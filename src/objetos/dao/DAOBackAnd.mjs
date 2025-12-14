export default class PessoaDAO {

    constructor(id = null) {
        this.baseUrl = "https://backend-plataforma.cursos.app/pessoa";
        this.cache = [];
      
        if (id) {
          // Carrega um único registro e guarda no cache
          this.cache = [];
          this.buscarPorId(id).then((pessoa) => {
            if (pessoa) this.cache = [pessoa];
          });
        } else {
          // Carrega a lista completa
          this.carregarLista();
        }
      }
  

  // 🔹 Busca remota e atualiza o cache
  async carregarLista() {
    try {
      const resp = await fetch(this.baseUrl);
      if (!resp.ok) throw new Error("Erro ao listar pessoas");

      const data = await resp.json();
      this.cache = data.map((Pessoa) => this.mapPessoa(Pessoa));
    } catch (e) {
      console.error("Erro ao carregar lista Pessoa:", e);
      this.cache = [];
    }
  }

  // 🔹 Retorna cache atual (sincrônico, compatível com React)
  listar() {
    if (!this.cache || this.cache.length === 0) {
      // dispara atualização assíncrona, mas retorna array
      this.carregarLista();
    }
    return this.cache;
  }

  async salvar(Pessoa) {
    try {
      const obj = this.toPlain(Pessoa);
      delete obj.id;

      const resp = await fetch(this.baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!resp.ok) throw new Error("Erro ao salvar Pessoa");

      const data = await resp.json();
      const novo = this.mapPessoa(data);
      this.cache.push(novo);
      return novo;
    } catch (e) {
      console.error("Erro ao salvar Pessoa:", e);
      return null;
    }
  }

  async atualizar(id, novoPessoa) {
    try {
      const obj = this.toPlain(novoPessoa);
      delete obj.id;

      const resp = await fetch(`${this.baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (!resp.ok) throw new Error("Erro ao atualizar Pessoa");

      const data = await resp.json();
      const atualizado = this.mapPessoa(data);

      const idx = this.cache.findIndex((p) => p.id === id);
      if (idx >= 0) this.cache[idx] = atualizado;
      else this.cache.push(atualizado);

      return atualizado;
    } catch (e) {
      console.error("Erro ao atualizar Pessoa:", e);
      return null;
    }
  }

  async excluir(id) {
    try {
      const resp = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
      if (!resp.ok) throw new Error("Erro ao excluir Pessoa");
      this.cache = this.cache.filter((p) => p.id !== id);
    } catch (e) {
      console.error("Erro ao excluir Pessoa:", e);
    }
  }

  // 🔹 Mapeia dados do backend → formato do front
  mapPessoa(Pessoa) {
    return {
      id: Pessoa._id,
      nome: Pessoa.nome,
      email: Pessoa.email,
      cPessoa: Pessoa.cPessoa,
      telefones: (Pessoa.telefones || []).map((t) => ({
        ddd: t.ddd,
        numero: t.numero,
      })),
    };
  }

  // 🔹 Converte objeto Pessoa (classe) → formato JSON esperado pelo backend
  toPlain(Pessoa) {
    if (!Pessoa) return {};
    const telefones = Pessoa.getTelefones?.() || [];

    return {
      nome: Pessoa.getNome?.(),
      email: Pessoa.getEmail?.(),
      cPessoa: Pessoa.getCPessoa?.(),
      telefones: telefones.map((t) => ({
        ddd: t.getDdd?.(),
        numero: t.getNumero?.(),
      }))
    };
  }

   // 🔹 Busca uma Pessoa específica por ID
async buscarPorId(id) {
    // tenta primeiro no cache
    const existente = this.cache.find((p) => p.id === id);
    if (existente) return existente;
  
    // se não existir, busca diretamente no backend
    try {
      const resp = await fetch(`${this.baseUrl}/${id}`);
      if (!resp.ok) throw new Error("Erro ao buscar Pessoa por ID");
      const data = await resp.json();
      const pessoa = this.mapPessoa(data);
  
      // adiciona no cache para futuras buscas
      this.cache.push(pessoa);
      return pessoa;
    } catch (e) {
      console.error("Erro ao buscar Pessoa por ID:", e);
      return null;
    }
  }
    
}
