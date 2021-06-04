


import React, { Component } from 'react'
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import BtnAdd from './components/BtnAdd/BtnAdd';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadDistrict: true,
      districts: null,
      streets: null,
      loadStreet: true
    }
  }
  loadDataStreet(s) {
    if (this.state.loadStreet === true||s) {
      console.log("load_street");
      axios.get("/api/v1/streets").then((res) => {
        this.setState({ ...this.state, streets: res.data })
        console.log(4);
      }).catch((error) => {
        console.error(error);
      })
      this.setState({ ...this.state, loadStreet: false })
    }
  }
  loadDataDistrict() {
    if (this.state.loadDistrict === true) {
      console.log("load_districts");
      axios.get("/api/v1/districts").then((res) => {
        this.setState({ ...this.state, districts: res.data })
      }).catch((error) => {
        console.error(error);
      })
      this.setState({ ...this.state, loadDistrict: false })
    }
  }
  searchStreet(keyword, districtId) {
    keyword = keyword || "";
    districtId = districtId || "";
    console.log(keyword,districtId);
    axios.get("/api/v1/streets/search?keyword="+keyword+"&districtId="+districtId).then((res) => {
      this.setState({ ...this.state, streets: res.data })
    }).catch((error) => {
      console.error(error);
    })
  }
  componentWillMount() {
    console.log(1);
    this.loadDataStreet();
    this.loadDataDistrict();
  }
  componentWillUpdate() {
    console.log(2);
    this.loadDataStreet();
    this.loadDataDistrict();
  }

  render() {
    return (
      <div className="container">
        <div className="pa25 ttu fs2 tac fwb bb1 bss bce mb10">Streets manager</div>
        <BtnAdd text="Add Street" dataDistrict={this.state.districts} reloadStreetData={() => {
          this.loadDataStreet(true);
        }} />
        <div className="pa10">
          <Search dataDistrict={this.state.districts} searchStreet = {(keyword,districtId)=>{this.searchStreet(keyword,districtId)}} />
          <Table dataStreet={ this.state.streets}/>
        </div>
      </div>
    );
  }
}


export default App;
