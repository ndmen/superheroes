import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'

class DataTable extends Component {

  deleteItem = _id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('http://localhost:4000/heroes/' + _id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(_id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item._id}>
          <td>{item.images}</td>
          <td>{item.nickname}</td>
          <td>{item.real_name}</td>
          <td>{item.origin_description}</td>
          <td>{item.superpowers}</td>
          <td>{item.catch_phrase}</td>
          <td>
            <div style={{width:"110px"}}>
              <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item._id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

      console.log(items)

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Images</th>
            <th>Nickname</th>
            <th>Real name</th>
            <th>Origin description</th>
            <th>Superpowers</th>
            <th>Catch phrase</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable