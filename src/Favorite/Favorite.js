import React from "react";
import "./Favorite.css";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Flex, Box } from "rebass";
import { Card } from "primereact/card";
import { connect } from "react-redux";
import { dataSave } from "../State/Action";
import Grid from "@material-ui/core/Grid";

class Favorite extends React.Component {
  render() {
    const header = (
      <img alt="NoImage" src={this.props.data.image} className="movie-card" />
    );
    const footer = (
      <span>
        <Button label="Delete" icon="delete" />
      </span>
    );
    return (
      <React.Fragment>
        <Flex>
          <Box p={3} width={1} color="white" bg="black">
            <Link to="/App">
              <Button icon>
                <Icon name="home" />
                Home
              </Button>
            </Link>
          </Box>
        </Flex>

        <div className="favorite-bg">
          <div className="favorite-content">
            <Grid container spacing={16}>
              {this.props.data.map((data, index) => (
                <Grid item xs={6} key={`grid-data-${index}`}>
                  <Card
                    title={this.props.data[0].name}
                    subTitle={this.props.data[0].type}
                    style={{ width: "360px" }}
                    className="ui-card-shadow"
                    footer={footer}
                    header={header}
                  >
                    <div>{this.props.data[0].plot}</div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  data: state.item.data
});

const mapDispatchToProps = {
  dataSave
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);
