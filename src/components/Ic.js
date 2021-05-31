import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';


class Ic extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.myRef.current.classList.remove("MuiIcon-root")
    }
    componentDidUpdate() {
        this.myRef.current.classList.remove("MuiIcon-root")
    }
    render() {
        const className = this.props.className,
            icon = (this.props.icon+"").split("::")[0],
            classIcon = ((this.props.icon+"").split("::")[1]||"").replace(/,/g," "),
            text = this.props.text || this.props.children;
        return (
            <div onClick={this.props.onClick} className={className}> <Icon ref={this.myRef} className={classIcon}>{icon}</Icon>{text}</div>
        );
    }
}

export default Ic;
