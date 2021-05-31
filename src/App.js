


import React, { Component } from 'react'
import FormThêmCôngViệc from './components/FormThêmCôngViệc/FormThêmCôngViệc';
import NútThêmCôngViệc from './components/NútThêmCôngViệc/NútThêmCôngViệc';
import ThanhTìmKiếm from './components/ThanhTìmKiếm/ThanhTìmKiếm';
import BảngCôngViệc from './components/BảngCôngViệc/BảngCôngViệc';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="pa25 ttu fs2 tac fwb bb1 bss bce">Quản lý công việc</div>
        <div className="df fww jcsc">
          <div className={"col-xs-3 pa10 "+(this.props.showForm?"":"dn")}>
            <FormThêmCôngViệc />
          </div>
          <div className={"pa10 "+(this.props.showForm?"col-xs-9":"col-xs-12")}>
            <NútThêmCôngViệc />
            <ThanhTìmKiếm />
            <BảngCôngViệc />
          </div>
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
