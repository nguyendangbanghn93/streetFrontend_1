import React, { Component } from 'react';
import Ic from '../Ic';
import axios from 'axios';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, validateStatus: false }
    }

    changeInput = (e) => {
        var data = { ...this.state.data };
        data[e.target.name] = e.target.value;
        this.setState({ data: data });
    }
    handleSave = () => {
        const data = this.state.data;
        if (data.name && data.status && data.districtId) {

            if (data.founding) {
                data.founding = window.Helper.toMillis(data.founding)
            }
            this.setState({ ...this.state, validateStatus: false });
            axios.post("/api/v1/streets", data).then((res) => {
                console.log(res.data)
                this.props.reloadStreetData();
            }).catch((error) => {
                console.error(error);
            })
            this.props.close()
        } else {
            this.setState({ ...this.state, validateStatus: true });
        }
    }

    renderSelectDistrict() {
        if (this.props.dataDistrict != null) {
            return (
                <select onChange={e => this.changeInput(e)} name="districtId" className="pa10 w1 b1sd bra5">
                    <option>Chọn</option>
                    {this.props.dataDistrict.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
            )
        }
        return null;
    }
    renderValidate() {
        if (this.state.validateStatus) {
            return <span className="crd ml5">* Yêu cầu nhập đầy đủ các trường thông tin bắt buộc</span>
        } else {
            return <span className="crd fwb ml5">*</span>
        }
    }
    render() {
        return (
            <div className="pf t0 l0 r0 b0 bgc07 df fdc jcsc aic">
                <div className="bra5 oh bw1 bss bce bgcf col-xs-12 col-md-8">
                    <div className="bb1 bss bce pa5 df jcsb bg2 pa10">
                        <div onClick={this.props.reloadDistrict} className="cf fwb">Add Street</div>
                        <Ic icon="close::pa3,bấmĐc,cf,mr5" onClick={() => { this.props.close() }} />
                    </div>
                    <div>
                        <div className="pa10 fwb">Name street:{this.renderValidate()}</div>
                        <div className="plr10">
                            <input onChange={e => this.changeInput(e)} type="text" name="name" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Founding:</div>
                        <div className="plr10">
                            <input onChange={e => this.changeInput(e)} type="date" name="founding" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Description:</div>
                        <div className="plr10">
                            <input onChange={e => this.changeInput(e)} type="text" name="description" className="pa10 w1 b1sd bra5" />
                        </div>

                        <div className="pa10 fwb">Status:{this.renderValidate()}</div>
                        <div className="plr10">
                            <select onChange={e => this.changeInput(e)} name="status" className="pa10 w1 b1sd bra5">
                                <option>Chọn</option>
                                <option value={0}>Đang thi công</option>
                                <option value={1}>Đang sử dụng</option>
                                <option value={2}>Đang tu sửa</option>
                            </select>
                        </div>

                        <div className="pa10 fwb">District:{this.renderValidate()}</div>
                        <div className="plr10">
                            {this.renderSelectDistrict()}
                        </div>

                        <div className="mt15 pa10 grid tar">
                            <Ic onClick={(e) => { this.handleSave(e) }} className="btn bn bg2 cf pa10 ml10 bra5" icon="save::pa3,cf,mr5" text="Lưu" />
                            <Ic onClick={() => { this.props.close() }} className="btn bn bg5 cf pa10 ml10 bra5" icon="close::pa3,cf,mr5" text="Hủy" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
