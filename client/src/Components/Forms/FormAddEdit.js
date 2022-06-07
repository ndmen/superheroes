import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    _id: 0,
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:4000/heroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: this.state.nickname,
        real_name: this.state.real_name,
        origin_description: this.state.origin_description,
        superpowers: this.state.superpowers,
        catch_phrase: this.state.catch_phrase,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/heroes/' + this.props.item._id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: this.state.nickname,
        real_name: this.state.real_name,
        origin_description: this.state.origin_description,
        superpowers: this.state.superpowers,
        catch_phrase: this.state.catch_phrase,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { _id, nickname, real_name, origin_description, superpowers, catch_phrase } = this.props.item
      this.setState({ _id, nickname, real_name, origin_description, superpowers, catch_phrase })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="nickname">Nickname</Label>
          <Input type="text" name="nickname" id="nickname" onChange={this.onChange} value={this.state.nickname === null ? '' : this.state.nickname} />
        </FormGroup>
        <FormGroup>
          <Label for="real_name">Real name</Label>
          <Input type="text" name="real_name" id="real_name" onChange={this.onChange} value={this.state.real_name === null ? '' : this.state.real_name}  />
        </FormGroup>
        <FormGroup>
          <Label for="origin_description">Origin description</Label>
          <Input type="text" name="origin_description" id="origin_description" onChange={this.onChange} value={this.state.origin_description === null ? '' : this.state.origin_description}  />
        </FormGroup>
        <FormGroup>
          <Label for="superpowers">Superpowers</Label>
          <Input type="text" name="superpowers" id="superpowers" onChange={this.onChange} value={this.state.superpowers === null ? '' : this.state.superpowers}  />
        </FormGroup>
        <FormGroup>
          <Label for="catch_phrase">Catch phrase</Label>
          <Input type="text" name="catch_phrase" id="catch_phrase" onChange={this.onChange} value={this.state.catch_phrase === null ? '' : this.state.catch_phrase}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm