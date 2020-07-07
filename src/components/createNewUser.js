import React from "react";
import {
  Paper,
  Typography,
  Button,
  TextField,
  Tooltip,
} from "@material-ui/core";
class CreateNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {},
      postFailed: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      formdata: { ...this.state.formdata, [e.target.name]: e.target.value },
    });
  }

  validateEmail() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (
      !this.state.formdata["email"] ||
      reg.test(this.state.formdata["email"])
    ) {
      return true;
    } else {
      return false;
    }
  }
  addUser() {
    const payload = this.state.formdata;
    //Call action and send the payload
  }

  render() {
    return (
      <div style={{ textAlign: "center", margin: "30px" }}>
        <Paper style={{ width: "50%", margin: "auto", padding: "30px" }}>
          <Typography variant="h5" color="secondary">Complete your sign up</Typography>
          <TextField
            required
            name="full_name"
            label={"Full Name"}
            style={{margin:"16px"}}
            color="secondary"
            onChange={this.handleInputChange}
          ></TextField>
          <br></br>
          <TextField
            required
            name="phone_number"
            label={"Mobile Number"}
            style={{margin:"16px"}}
            color="secondary"
            onChange={this.handleInputChange}
          ></TextField>
          <br></br>
          <TextField
            required
            name="email"
            label={"Email"}
            type="email"
            color="secondary"
            error={
              this.validateEmail() === false
                ? (this.wrongEmail = true)
                : (this.wrongEmail = false)
            }
            style={{margin:"16px"}}
            onChange={this.handleInputChange}
          ></TextField>
          <br></br>
          <Tooltip title={"Please enter all the required fields!"}>
            <span>
              <Button
                variant="contained"
                style={{ margin: "16px" }}
                color="primary"
                onClick={this.addUser}
                disabled={
                  !(
                    this.state.formdata["full_name"] &&
                    this.state.formdata["phone_number"] &&
                    this.state.formdata["email"]
                  ) || this.wrongEmail
                }
              >
                Create Account
              </Button>
            </span>
          </Tooltip>
        </Paper>
      </div>
    );
  }
}

export default CreateNewUser;
