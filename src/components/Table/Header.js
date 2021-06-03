import React, { Component } from 'react';

class Header extends Component {
    rederTitle = () => {
        return this.props.column.map((c, i) => (<th key={i} className={this.props.classColumn}>{c}</th>))
    }
    render() {
        return (
            <tr className={this.props.classHeader}>
                {this.rederTitle()}
            </tr>
        );
    }
}

export default Header;
