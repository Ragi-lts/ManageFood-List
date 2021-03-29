import React from 'react';
import moment from 'moment';


export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: moment().format(this.props.format)
        };
    }

    componentDidMount() {
        this.intervalid = setInterval(() => {
            this.setState({
                now: moment().format(this.props.format)
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalid);
    }

    render() {
        return <div id="nowTime">{this.state.now}</div>
    }
}