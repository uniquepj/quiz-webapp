import React, { Component } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from "@material-ui/core";

class HeaderRight extends Component {
  constructor(props) {
    super(props);

    const { number } = this.props;
    const data = {};
    for (let i = 0; i < number; i++) {
      data[i + 1] = "";
    }

    this.state = { data };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = () => {
    const { data } = this.state;
    const submissionTime = new Date();
    console.log(typeof submissionTime, submissionTime, data);
    axios
      .post("api_endpoint", {
        data,
        submissionTime,
      })
      .then((res) => {
        console.log("succes", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { number } = this.props;
    const { data } = this.state;
    const renderList = [];

    for (let i = 0; i < number; i++) {
      renderList.push(
        <ListItem
          key={i + 1}
          style={{ display: "flex", justifyContent: "center" }}
          divider
        >
          <FormControl margin="normal" component="fieldset">
            <FormLabel component="legend">Question: {i + 1}</FormLabel>
            <RadioGroup
              row
              // aria-label="gender"
              name={`${i + 1}`}
              value={data[i + 1]}
              onChange={this.handleChange}
            >
              <FormControlLabel value="A" control={<Radio />} label="A" />
              <FormControlLabel value="B" control={<Radio />} label="B" />
              <FormControlLabel value="C" control={<Radio />} label="C" />
              <FormControlLabel value="D" control={<Radio />} label="D" />
            </RadioGroup>
          </FormControl>
        </ListItem>
      );
    }

    return (
      <List>
        <h1>Please select the appropriate options</h1>
        {renderList}
        <br />
        <div style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </List>
    );
  }
}

export default HeaderRight;
