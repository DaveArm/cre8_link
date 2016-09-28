import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(event){
    event.preventDefault();

    Meteor.call('links.insert', this.refs.link.value);
  }

  render() {
    return (
      <div class="row">
        <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
          <div className="row">
            <div className="input-field col s12">
              <input ref="link" type="text" id="url" class="validate" />
              <label for="url">Type or paste your URL</label>
              <button className="waves-effect waves-light btn-large">Shorten!</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LinkCreate;
