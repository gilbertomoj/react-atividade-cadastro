import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="card">
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar</p>
            <input placeholder="Nome"/>
            <input placeholder="Sobrenome"/>
            <input placeholder="Email"/>
            <input placeholder="Senha"/>
            <span>Concluir Cadastro</span>
        </div>
      </div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          App React
        </h2>
      </div>
    </div>
  );
}

export default App;
