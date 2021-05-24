import React, { Component } from 'react';

class TableBody extends Component {
    state = {
        people: [
            {
                id:1,
                fullName:"Julius K",
                phoneNumber:"1234",
                emailAddress:"a@b.c"    
            },
            {
                id:2,
                fullName:"qwer",
                phoneNumber:"a4567",
                emailAddress:"q@e.f"    
            },
            {
                id:3,
                fullName:"6789",
                phoneNumber:"1234",
                emailAddress:"g@e.h"    
            }
        ]
    }
    
    render() {

    const tableRows = this.state.people.map((row,index) => 
        <tr key={row.id}>
            <td>{row.fullName}</td>
            <td>{row.phoneNumber}</td>
            <td>{row.emailAddress}</td>
            <td>{}</td>
        </tr>)

        return (
           <tbody>
               {tableRows}
           </tbody>
        );
    }
}

export default TableBody;