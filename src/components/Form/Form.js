import React, { Component } from 'react';
import Ic from '../Ic';
import { connect } from 'react-redux';
import axios from 'axios';
let oldData = {};
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    changeInput = (e) => {
        var data = { ...this.state.data };
        data[e.target.name] = e.target.value;
        this.setState({ data: data });
    }
    clickLưu = () => {
        const data = Object.assign(oldData,this.state.data);
        const user = window.Helper.toEntity(data);
        console.log(this.props.isEdit);
        if (this.props.isEdit) {
            console.log(user);
            axios.put("/api/v1/users", user).then((r) => {
                console.log(r)
                this.props.loadData()
            })
        } else {
            axios.post("/api/v1/users", user).then((r) => {
                this.props.loadData()
            })
        }
    }
    render() {
        let data = {};
        if (this.props.dataEntity && Object.keys(this.props.dataEntity).length > 0) {
            oldData = { ...window.Helper.toData(this.props.dataEntity) };
            data = { ...window.Helper.toData(this.props.dataEntity) }
            data.birthday = window.Helper.formatDate(data.birthday, "{f}-{n}-{j}");
        }
        return (
            <div className="pf t0 l0 r0 b0 bgc07 df fdc jcsc aic">
                <div className="bra5 oh bw1 bss bce bgcf col-xs-12 col-md-8">
                    <div className="bb1 bss bce pa5 df jcsb bg2 pa10">
                        <div className="cf fwb">Add</div>
                        <Ic icon="close::pa3,bấmĐc,cf,mr5" onClick={() => { this.props.editShowForm(false) }} />
                    </div>
                    <div>

                        <div className="pa10 fwb">Username:</div>
                        <div className="plr10">
                            <input defaultValue={window.Helper.has('username', data)} onChange={e => this.changeInput(e)} type="text" name="username" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Password:</div>
                        <div className="plr10">
                            <input defaultValue={window.Helper.has('password', data)} onChange={e => this.changeInput(e)} type="text" name="password" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Fullname:</div>
                        <div className="plr10">
                            <input defaultValue={window.Helper.has('fullname', data)} onChange={e => this.changeInput(e)} type="text" name="fullname" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Birthday:</div>
                        <div className="plr10">
                            <input defaultValue={window.Helper.has('birthday', data)} onChange={e => this.changeInput(e)} type="date" name="birthday" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Phone:</div>
                        <div className="plr10">
                            <input defaultValue={window.Helper.has('phone', data)} onChange={e => this.changeInput(e)} type="text" name="phone" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Status:</div>
                        <div className="plr10">
                            <select defaultValue={window.Helper.has('status', data) || 1} onChange={e => this.changeInput(e)} name="status" className="pa10 w1 b1sd bra5" id="">
                                <option value={1}>Active</option>
                                <option value={0}>Deactive</option>
                                <option value={-1}>Delete</option>
                            </select>
                        </div>
                        <div className="mt15 pa10 grid tar">
                            <Ic onClick={() => { this.clickLưu() }} className="btn bn bg2 cf pa10 ml10 bra5" icon="save::pa3,cf,mr5" text="Lưu" />
                            <Ic onClick={() => { this.props.editShowForm(false) }} className="btn bn bg5 cf pa10 ml10 bra5" icon="close::pa3,cf,mr5" text="Hủy" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        dataEntity: state.dataEntity,
        isEdit: state.isEdit,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editShowForm: (showForm) => {
            dispatch({ type: "editShowForm", showForm: showForm });
        },
        addData: (data) => {
            dispatch({ type: "addData", data: data });
        },
        loadData: () => {
            dispatch({ type: "loadData", statusLoadData: true });
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)
