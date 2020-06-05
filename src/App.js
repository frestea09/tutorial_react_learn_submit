import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component{
    state = {
        dataMahasiswa : []
    }
    removeDataMahasiswa = index =>{
        const {dataMahasiswa} = this.state
        this.setState(
            {
                dataMahasiswa : dataMahasiswa.filter(
                    (dataMahasiswa,i)=>{
                        return i !== index
                    }
                ),
            }
        )
    }
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
      }
    render(){
        const {dataMahasiswa} = this.state
        return(
            <div className="container">
                <Table dataMahasiswa = {dataMahasiswa} removeDataMahasiswa = {this.removeDataMahasiswa}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default App