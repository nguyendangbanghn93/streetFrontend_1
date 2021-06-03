


import React, { Component } from 'react'
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  showForm() {
    if (this.props.showForm) {
      return <Form />
    }
    return null;
  }
  render() {
    return (
      <div className="container">
        {this.showForm()}
        <div className="pa25 ttu fs2 tac fwb bb1 bss bce">Streets manager</div>
        <div className="pa10">
            <Search />
            <Table />
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    showForm: state.showForm
  }
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editShowForm: (showForm) => {
      dispatch({ type: "editShowForm", showForm: showForm })
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
