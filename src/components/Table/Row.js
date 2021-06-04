import React, { Component } from 'react';

class Row extends Component {

    statusToString(s) {
        if (s === 0) {
                return <div className="bra5 bg3 dib cf pa3">Đang thi công</div>;
        } else if (s === 1) {
                return <div className="bra5 bg2 dib cf pa3">Đang sử dụng</div>;
        } else {
            return <div className="bra5 bg4 dib cf pa3">Đang tu sửa</div>;
        }
    }
    render() {
        return (
            <tr className={this.props.classRow}>
                <td className={this.props.className}>{window.Helper.has("streetData.stt", this.props)}</td>
                <td className={this.props.className}>{window.Helper.has("streetData.name", this.props)}</td>
                <td className={this.props.className}>{window.Helper.formatDate(window.Helper.has("streetData.founding", this.props))}</td>
                <td className={this.props.className}>{window.Helper.has("streetData.description", this.props)}</td>
                <td className={this.props.className}>{this.statusToString(window.Helper.has("streetData.status", this.props))}</td>
                <td className={this.props.className}>{window.Helper.has("streetData.districtName", this.props)}</td>
            </tr>
        );
    }
}

export default Row
