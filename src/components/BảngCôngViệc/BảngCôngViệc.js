import React, { Component } from 'react';
import CôngViệc from './CôngViệc';
import FilterBảngCôngViệc from './FilterBảngCôngViệc';
import HeaderBảngCôngViệc from './HeaderBảngCôngViệc';
import { connect } from 'react-redux';
class BảngCôngViệc extends Component {
    renderCôngViệc = () => {
        if (this.props.dataCôngViệc) {
            return (this.props.dataCôngViệc.map((d, i) => {
                return (<CôngViệc stt={i+1} key={i} tên={d.tên} tìnhTrạng={d.tìnhTrạng} />)
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
                        <HeaderBảngCôngViệc />
                        <FilterBảngCôngViệc />
                    </thead>
                    <tbody>
                        { this.renderCôngViệc()}
                    </tbody>
                </table>
            </div>
        );
    }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }
//     }
// }
const mapStateToProps = (state, ownProps) => {
    return {
        dataCôngViệc: state.dataCôngViệc
    }
}
export default connect(mapStateToProps, null)(BảngCôngViệc)
