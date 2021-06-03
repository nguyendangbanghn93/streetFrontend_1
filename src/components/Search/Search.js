import React, { Component } from 'react';
import Ic from '../Ic';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { districts: null }
    }
    componentDidMount() {
        if (this.state.districts == null) {
            axios.get("/api/v1/districts").then((res) => {
                this.setState({
                    districts: res.data,
                })
                console.log(res.data)
            })
                .catch((error) => {
                    console.error(error);
                })
        }

    }
    renderDistrictFilters() {
        console.log(this.state.districts)
        if (this.state.districts != null) {
            return (<select name="districtId" className=" pa10 b1sd bra3 mr10">{this.state.districts.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}</select>)
        }
        return null;
    }
    render() {
        return (
            <div className="df mb10">
                <input className=" pa10 b1sd bra3 mr10" type="text" placeholder="Nhập từ khóa" name="streetName" style={{ minWidth: "300px" }} />
                {this.renderDistrictFilters()}
                <Ic className="btn bn bg2 cf pa10 bra5 dib" icon="search::fwb,pr3" text="Search"></Ic>
            </div>
        );
    }
}

export default Search;
