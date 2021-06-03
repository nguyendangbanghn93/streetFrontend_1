import React, { Component } from 'react';
import Ic from '../Ic';
import { connect } from 'react-redux';

class NútThêmCôngViệc extends Component {
    render() {
        return (
            <div className="mb10">
                <Ic onClick={this.props.editShowForm} className="btn bn bg2 cf pa10 bra5 dib" icon="add::pa3,fwb" text="Thêm công việc"></Ic>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editShowForm: () => {
            dispatch({ type: "editShowForm", showForm: true })
        }
    }
}
export default connect(null, mapDispatchToProps)(NútThêmCôngViệc)
