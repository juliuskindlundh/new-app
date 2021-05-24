import React, { Component } from 'react';
import TableBody from './TableBody';
import TableHeads from './TableHeads'

class MyTable extends Component {
    render() {
        return (
            <table>
                <TableHeads/>
                <TableBody/>
            </table>
        );
    }
}
export default MyTable