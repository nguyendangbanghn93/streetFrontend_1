import React, { Component } from 'react';
import Ic from '../Ic';
import { connect } from 'react-redux';

class FormThêmCôngViệc extends Component {
    render() {
        return (
            <div className="bra5 oh bw1 bss bce">
                <div className="bb1 bss bce pa5 df jcsb bg2 pa10">
                    <div className="cf fwb">Thêm công việc</div>
                    <Ic icon="close::pa3,bấmĐc,cf,mr5"  onClick={() => { this.props.editShowForm(false) }} />
                </div>
                <div>
                    <div className="pa10 fwb">Nhập tên công việc:</div>
                    <div className="plr10">
                        <input type="text" name="tên" className="pa10 w1 b1sd bra5" />
                    </div>
                    <div className="pa10 fwb">Tình trạng:</div>
                    <div className="plr10">
                        <select name="tìnhTrạng" className="pa10 w1 b1sd bra5" id="">
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích hoạt</option>
                        </select>
                    </div>
                    <div className="mt15 pa10 grid tar">
                        <Ic onClick={() => { this.props.editShowForm(false) }} className="btn bn bg2 cf pa10 ml10 bra5" icon="save::pa3,cf,mr5" text="Lưu" />
                        <Ic onClick={() => { this.props.editShowForm(false) }} className="btn bn bg5 cf pa10 ml10 bra5" icon="close::pa3,cf,mr5" text="Hủy" />
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editShowForm: (showForm) => {
            dispatch({ type: "editShowForm", showForm: showForm });
        }
    }
}
export default connect(null, mapDispatchToProps)(FormThêmCôngViệc)
