import React from "react";
import "./Favorite.css";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { Flex, Box } from "rebass";

export default class Favorite extends React.Component {
  render() {
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

        <div className="landing-bg">
          <div className="landing-content">
            <Link to="/App" className="landing-link">
              <Button icon>
                <Icon name="list" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
