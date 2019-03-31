import React, { Component } from 'react';
import Event from './Event';
import PropTypes from 'prop-types'

class Events extends Component {
    render() {
        return (
            <div className="uk-child-width-1-4@m" uk-grid="true">
                {Object.keys(this.props.eventos).map(key => (
                    <Event
                        key={key}
                        info={this.props.eventos[key]}
                    />
                ))}
            </div>
        )
    }
}
Events.propTypes = {
    eventos: PropTypes.array.isRequired
}

export default Events;
