import React, {Component} from 'react';
import {getjob} from '../../actions/jobActoins';

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const fetched = this.props.getjob();
    this.setState({data: fetched});
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}
