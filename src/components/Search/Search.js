import React, { Component } from 'react';
import Ic from '../Ic';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { search: {} }
    }
    changeInput(e) {
        let data = this.state.search;
        data[e.target.name] = e.target.value;
        this.setState({ ...this.state, search: data });
    }
    renderDistrictFilters() {
        if (this.props.dataDistrict != null) {
            return (<select onChange={(e) => { this.changeInput(e) }} name="districtId" className=" pa10 b1sd bra3 mr10">
                <option value="">Chọn</option>
                {this.props.dataDistrict.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}</select>)
        }
        return null;
    }
    render() {
        return (
            <div className="df mb10">
                <input onChange={(e) => { this.changeInput(e) }} className=" pa10 b1sd bra3 mr10" type="text" placeholder="Nhập từ khóa" name="keyword" style={{ minWidth: "300px" }} />
                {this.renderDistrictFilters()}
                <Ic onClick={() => {
                    console.log(this.state.search.keyword, this.state.search.districtId)
                    this.props.searchStreet(this.state.search.keyword, this.state.search.districtId)
                }} className="btn bn bg2 cf pa10 bra5 dib" icon="search::fwb,pr3" text="Search"></Ic>
            </div>
        );
    }
}

export default Search;
