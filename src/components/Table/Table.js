import React, { Component } from 'react';
import Row from './Row';
// import FilterTable from './FillterTable';
import Header from './Header';
import { connect } from 'react-redux';
import axios from 'axios';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPages: 1,
            pageNumber: 1,
        }
    }

    loadData() {
        if (this.props.statusLoadData===true) {
            axios.get('/api/v1/users?limit=20')
                .then((res) => {
                    this.setState({
                        totalPages: res.data.totalPages,
                        pageNumber: res.data.pageable.pageNumber,
                    })
                    this.props.loadData(false, res.data.content)
                })
                .catch((error) => {
                    console.error(error);
                    this.props.loadData(false)
                })
        }
    }
    renderRow = () => {
        if (this.props.data) {
            return (this.props.data.map((d, i) => {
                d.stt = i + 1;
                return (<Row key={i} userData={d} />)
            }))
        } else {
            return "";
        }

    }
    render() {
        this.loadData();
        return (
            <div>
                <table className="w1 b1sd">
                    <thead>
                        <Header column={["STT", "Username", "Password", "Fullname", "Birthday", "Phone", "Status", "Update At", "Action"]} />
                    </thead>
                    <tbody>
                        {this.renderRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (data) => {
            dispatch({ type: "addData", data: data });
        },
        loadData: (status, data) => {
            dispatch({ type: "loadData", statusLoadData: status, data: data });
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data,
        statusLoadData: state.statusLoadData
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table)
