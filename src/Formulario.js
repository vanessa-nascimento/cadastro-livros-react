import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.stateInicial ={
            nome: '',
            livro: '',
            preco: '',
        }
        this.state = this.stateInicial;
    }

    escutadorInput = event =>{
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () =>{
        this.props.escutadorSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { nome, livro, preco} = this.state;

        return (
            <form>
                <div className="row m-10">
                    <div className="input-field col s4">
                        <label htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="livro">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorInput}
                        />
                    </div>
                    
                    <div className="input-field col s4">
                        <label htmlFor="preco">Preço</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorInput}
                        />
                    </div>
                </div>
                <button 
                    onClick={this.submitFormulario} 
                    type="button"
                    className="waves-effect waves-light btn indigo lighten-2">
                    Salvar
                </button>

            </form>
        );
    }
}

export default Formulario;