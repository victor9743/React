import './App.css';
import { Component } from 'react';
import { Campo_dados } from '../../components/Campo_dados';

export class App extends Component {

  state = {
    input_cep: "",
    cep: []
  };

  valor_input = (e) => {
    this.setState({input_cep: e.target.value});
  }

  pesquisar_click = () => {
    fetch("https://viacep.com.br/ws/"+this.state.input_cep+"/json/")
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na solicitação de dados');
        }
        return response.json(); 
      })
      .then(data => {
        this.setState({cep: data});
      })
      .catch(error => {
        console.error(error);
      });
    }

  render () {
    const {cep} = this.state;

    return (
      <>
        <div className='container campo_pesquisa'>
          <div className='row d-flex justify-content-end'>
            <div className='col-3'>
              <input className="form-control form-control-sm" type='text' onChange={this.valor_input} />
            </div>
            <div className='col-1'>
              <button className='btn btn-sm btn-primary' onClick={this.pesquisar_click} >pesquisar</button>
            </div>
          </div>
        </div>

        <Campo_dados cep={cep} />
      </>
    );
    }
}

export default App;
