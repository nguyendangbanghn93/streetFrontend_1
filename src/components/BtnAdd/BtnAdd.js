import React, { Component } from 'react';
import Form from '../Form/Form';
import Ic from '../Ic';

class BtnAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { showForm: false }
    }
    handleEditShowForm = () => {
        this.setState({ showForm: !this.state.showForm });
    }
    renderForm() {
        if (this.state.showForm) {
            return <Form close={this.handleEditShowForm} dataDistrict={this.props.dataDistrict} reloadStreetData={ this.props.reloadStreetData}/>
        }
        return null;
    }
    render() {
        return (
            <div className="mb10">
                {this.renderForm()}
                <Ic onClick={this.handleEditShowForm} className="btn bn bg2 cf pa10 bra5 dib" icon="add::pa3,fwb" text={this.props.text}></Ic>
            </div>
        );
    }
}
export default BtnAdd;

