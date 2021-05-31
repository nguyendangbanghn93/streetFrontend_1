import React, { Component } from 'react';
import Ic from '../Ic';
import { connect } from 'react-redux';

class CôngViệc extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.tên}</td>
                <td className="tac">
                    {this.props.tìnhTrạng == 1 ? <div className="bra5 bg5 dib cf pa3">Kích hoạt</div> : <div className="bra5 bg6 dib cf pa3">Ẩn</div>}

                </td>
                <td className="tac">
                    <Ic onClick={() => { this.props.editShowForm() }} className="btn bn bg2 cf pa10 bra5 dib" icon="edit::fwb,pr3" text="Sửa"></Ic>
                    <Ic className="btn bn bg5 cf pa10 bra5 dib ml10" icon="delete::fwb,pr3" text="Xóa"></Ic>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editShowForm: () => {
            dispatch({ type: "editShowForm", showForm: true });
        }
    }
}
export default connect(null, mapDispatchToProps)(CôngViệc)
