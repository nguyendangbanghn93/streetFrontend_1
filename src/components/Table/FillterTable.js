import React, { Component } from 'react';

class FilterTable extends Component {
    render() {
        return (
            <tr>
                <td></td>
                <td>
                    <input type="text" className="pa10 w1 b1sd bra5" placeholder="" />
                </td>
                <td className="tac">
                    <select name="tìnhTrạng" className="pa10 w1 b1sd bra5">
                        <option value=""></option>
                        <option value={0}>Ẩn</option>
                        <option value={1}>Kích hoạt</option>
                    </select>
                </td>
                <td className="tac">

                </td>
            </tr>
        );
    }
}

export default FilterTable;
