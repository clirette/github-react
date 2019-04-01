import React, { Component } from 'react';
import Results from './Results';
import axios from 'axios';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      items: []
    }
  }

  onChange = e => {
    this.setState({user: e.target.value})
  }

  doSearch = async e => {
    e.preventDefault();
    try {
      const data = await axios.get(`https://api.github.com/search/users?q=${this.state.user}`);
      const { items } = data.data;
      console.log(items);
      this.setState({ items });
    } catch(err) {
      console.log(err);
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <form action="https://api.github.com/search/users?" method="GET" >
            <div className="form-group">
              <label htmlFor="q">Search Users</label>
              <input type="text" name="q" className="form-control" onChange={this.onChange}/>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="form-control btn btn-primary search-button" onClick={this.doSearch}/>
            </div>
          </form>
        </div>
        <div>
          <Results items={this.state.items}/>
        </div>
      </div>
    )
  }
}
