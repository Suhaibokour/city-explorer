import React, { Component } from 'react';

import Moviecard from './movie';
class Movie extends Component {

    render() {
        return (
            <>
                {this.props.movieData.map(item => {
                    return (
                        <Moviecard
                            title={item.title}
                            overview={item.overview}
                            image_url={item.image_url}
                            released_on={item.released_on}
                        />
                    );

                })
                }
            </>

        );
    }
}

export default Movie;