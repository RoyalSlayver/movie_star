import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { Button, Icon, Form, TextArea } from "semantic-ui-react";
import { Flex, Box } from "rebass";
import { Card } from "primereact/card";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import { connect } from "react-redux";
import { findMovie, dataSave } from "../State/Action";

const SearchBar = ({ changeItemValue, onCreateItem, ItemValue }) => (
  <Form>
    <TextArea
      autoHeight
      placeholder={"Movie Name"}
      value={ItemValue}
      rows={1}
      style={{ width: "90%" }}
      onChange={e => changeItemValue(e.target.value)}
    />
    <Button icon onClick={onCreateItem}>
      <Icon name="plus" />
    </Button>
  </Form>
);

class MovieList extends React.Component {
  state = {
    ItemValue: ""
  };

  changeItemValue(value) {
    this.setState({
      ItemValue: value
    });
  }

  PushItem() {
    this.props.findMovie({
      Id: Date.now(),
      Item: this.state.ItemValue
    });
  }
  SaveFavorite() {
    this.props.dataSave({
      id: Date.now(),
      name: this.props.movie.name,
      image: this.props.movie.imageUrl,
      type: this.props.movie.type,
      plot: this.props.movie.plot
    });
  }

  render() {
    const header = (
      <img
        alt="NoImage"
        src={this.props.movie.imageUrl}
        className="movie-card"
      />
    );
    const footer = (
      <span>
        <Button
          label="Favorite"
          icon="star"
          onClick={() => this.SaveFavorite()}
        />
      </span>
    );

    return (
      <React.Fragment>
        <Flex>
          <Box p={3} width={1 / 2} color="white" bg="black">
            <Link to="/App">
              <Button icon>
                <Icon name="home" />
                Home
              </Button>
            </Link>
          </Box>
          <Box p={3} width={1 / 2} color="white" bg="black">
            <SearchBar
              ItemValue={this.state.ItemValue}
              changeItemValue={value => this.changeItemValue(value)}
              onCreateItem={() => this.PushItem()}
            />
          </Box>
        </Flex>
        <div className="movie-bg">
          <div className="movie-content">
            <Card
              title={this.props.movie.name}
              subTitle={this.props.movie.type}
              style={{ width: "360px" }}
              className="ui-card-shadow"
              footer={footer}
              header={header}
              onFavorite={() => this.SaveFavorite()}
            >
              <div>{this.props.movie.plot}</div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.item.movie,
  isLoading: state.item.isLoading,
  hasError: state.item.error,
  image: state.item.imageUrl
});

const mapDispatchToProps = {
  findMovie,
  dataSave
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
