import React, { Component } from 'react';
import List from './list'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      textfeild: "",
      list: [],
    }
    this.textfeild_update = this.textfeild_update.bind(this)
    this.add_item = this.add_item.bind(this)
    this.remove_item = this.remove_item.bind(this)
  }

  textfeild_update(e){
    this.setState({ textfeild: e.target.value })
  }

  add_item(item){
    this.state.list.push(item)
    this.setState({ list: this.state.list })
    this.setState({ textfeild: "" })
    console.log(this.state)
  }

  remove_item(){
    this.state.list.pop()
    this.setState({ list: this.state.list })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="enter val" value={this.state.textfeild} onChange={this.textfeild_update} />
        <input type="button" value="add item" onClick={ () => this.add_item(this.state.textfeild) } />
        <input type="button" value="remove item" onClick={this.remove_item} />
        <hr />
        <List dataarray={this.state.list} />
      </div>
    );
  }
}

export default App;