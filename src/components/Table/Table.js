import React, { Component } from 'react';
import Row from './Row';
import Header from './Header';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            streets: null,
            loadData:true,
        }
    }
    renderRow = () => {
        if (this.props.dataStreet) {
            return (this.props.dataStreet.map((d, i) => {
                d.stt = i + 1;
                return (<Row key={i} streetData={d} className = "ptb15"/>)
            }))
        } else {
            return "";
        }

    }
    render() {
        return (
            <div>
                <table className="w1 b1sd">
                    <thead>
                        <Header column={["STT", "Street", "Founding", "Description", "Status", "District"]} />
                    </thead>
                    <tbody>
                        {this.renderRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table
