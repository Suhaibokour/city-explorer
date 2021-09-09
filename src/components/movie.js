import { Card } from 'react-bootstrap';
import React, { Component } from 'react';

class Moviecard extends Component {
    render() {
        return (
            < Card >
                <Card.Img variant="top" src={this.props.image_url} className='cardimage' />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.overview}
                    </Card.Text>

                    <Card.Text>
                        Released Date: {this.props.released_on}
                    </Card.Text>

                    <a href={this.props.image_url} rel='noreferrer' target='_blank'>Full Poster</a>
                </Card.Body>
            </Card >
        );
    }
}

export default Moviecard;