import React, { Component } from 'react';
import Ic from '../Ic';
import { connect } from 'react-redux';

class Row extends Component {
    renderStatus() {
        switch (window.Helper.has("userData.status", this.props)) {
            case -1:
                return (<div className="bra5 bg6 dib cf pa3">delete</div>)
            case 0:
                return (<div className="bra5 bg6 dib cf pa3">Deactive</div>);
            default:
                return (<div className="bra5 bg2 dib cf pa3">Active</div>);
        }
    }
    render() {
        return (
            <tr>
                <td>{window.Helper.has("userData.stt", this.props)}</td>
                <td>{window.Helper.has("userData.username", this.props)}</td>
                <td>{window.Helper.has("userData.password", this.props)}</td>
                <td>{window.Helper.has("userData.information.fullname", this.props)}</td>
                <td>{window.Helper.formatDate(window.Helper.has("userData.information.birthday", this.props))}</td>
                <td>{window.Helper.has("userData.information.phone", this.props)}</td>
                <td className="tac">{this.renderStatus()}</td>
                <td>{window.Helper.formatDate(window.Helper.has("userData.updatedAt", this.props))}</td>
                <td className="tac">
                    <Ic onClick={() => { this.props.editEntity(this.props.userData) }} className="btn bn bg2 cf pa10 bra5 dib" icon="edit::fwb,pr3" text="Sửa"></Ic>
                    <Ic className="btn bn bg5 cf pa10 bra5 dib ml10" icon="delete::fwb,pr3" text="Xóa"></Ic>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editEntity: (data) => {
            dispatch({ type: "editEntity", data: data });
        },
        editShowForm: () => {
            dispatch({ type: "editShowForm", showForm: true });
        }
    }
}
export default connect(null, mapDispatchToProps)(Row)
