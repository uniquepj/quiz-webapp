import React, { Component } from "react";
import axios from "axios";
import { Container, Grid, Paper, withStyles } from "@material-ui/core";

import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { number: null, imgSrc: "" };
  }

  componentDidMount() {
    axios
      .get("api_endpoint")
      .then((res) => {
        console.log(res);
        const { number, imgSrc } = res;
        this.setState({ number, imgSrc });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const imgSrc =
      "https://prc5.github.io/react-zoom-pan-pinch/static/media/example.25094e6d.jpg";
    const number = 10;

    //uncomment the next line after api integration and comment hard-coded lines above

    // const { number,imgSrc } = this.state;
    const { classes } = this.props;
    return (
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <HeaderLeft imgSrc={imgSrc} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <HeaderRight number={number} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Header);
