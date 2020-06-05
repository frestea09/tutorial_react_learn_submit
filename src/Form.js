import React,{Component} from 'react'

class Form extends Component{
    intialState = {
        nama : '',
        nim : '',
    }
    state = this.intialState
    handleChange = event =>{
        const{nama,value} = event.target
        
        this.setState({
                [nama]:value,
            }
        )
    }
    submitForm = () => {
      this.props.handleSubmit(this.state)
      this.setState(this.initialState)
    }
    render(){
        const {nama,nim} = this.state
        return (
            <form>
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                name="nama"
                id="nama"
                value={nama}
                onChange={this.handleChange} />
              <label htmlFor="nim">Nim</label>
              <input
                type="text"
                name="nim"
                id="nim"
                value={nim}
                onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
          );
    }
}
export default Form