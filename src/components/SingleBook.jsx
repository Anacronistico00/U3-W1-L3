import { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  render() {
    return (
      <Card
        style={{
          width: '16rem',
          margin: '7px',
          border: this.state.selected ? '1px solid red' : 'none',
        }}
      >
        <Card.Img
          variant='top'
          style={{ height: '400px' }}
          src={this.props.book.img}
          alt={this.props.book.title}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
