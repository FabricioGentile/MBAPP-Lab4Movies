import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component{

  render(){
    return(
        <div>
            <Card style={{ width: '10rem'}}>
               
                 <Card.Body>
                     <Card.Text>{this.props.movie.Title}</Card.Text>
                     <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Text>{this.props.movie.Year}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
  } 
}

export default MovieItem;

