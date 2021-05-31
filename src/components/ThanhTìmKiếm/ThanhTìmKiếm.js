import React, { Component } from 'react';
import Ic from '../Ic';

class ThanhTìmKiếm extends Component {
    render() {
        return (
            <div className="grid mb10">
                <input className=" pa10 b1sd bra3" type="text" placeholder="Nhập từ khóa" name="tìmKiếm" style={{ minWidth: "300px" }} />
                <Ic className="btn bn bg2 cf pa10 bra5 dib ml10" icon="search::fwb,pr3" text="Tìm kiếm"></Ic>
                <Ic className="btn bn bg2 cf pa10 bra5 dib ml10" icon="arrow_drop_down::fwb,pr3" text="Sắp xếp"></Ic>
            </div>
        );
    }
}

export default ThanhTìmKiếm;
