import { useState } from "react";

function App() {

  const [servico, setServico] = useState("");
  const [data, setData] = useState("");
  const [valor, setValor] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarServico() {

    if (!servico || !data || !valor) {
      alert("Preencha todos os campos");
      return;
    }

    const novoServico = {
      servico,
      data,
      valor
    };

    setLista([...lista, novoServico]);

    setServico("");
    setData("");
    setValor("");
  }

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>

      <h1>Agendamento de Serviços</h1>

      <div style={{ marginBottom: 20 }}>

        <input
          type="text"
          placeholder="Nome do serviço"
          value={servico}
          onChange={(e) => setServico(e.target.value)}
        />

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <button onClick={adicionarServico}>
          Cadastrar
        </button>

      </div>

      <h2>Serviços Agendados</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Serviço</th>
            <th>Data</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>

          {lista.map((item, index) => (
            <tr key={index}>
              <td>{item.servico}</td>
              <td>{item.data}</td>
              <td>R$ {item.valor}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;