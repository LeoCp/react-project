import React from "react";

export default class Table extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            {
              this.props.tbHead.map(item=>{
                return <th key={item.id}>{item.name}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            this.props.tbBody.map(item=>{
              return <tr key={item.id}>
                <th>{item.colum1}</th>
                <td>{item.colum2}</td>
                <td>{item.colum3}</td>
                <td>{item.colum4}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
}
