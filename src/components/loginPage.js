import React from "react";
import { Paper, Typography, Button, Divider } from "@material-ui/core"
class Login extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center", margin:"30px"}}>
                <Paper style={{width:"50%", margin:"auto", padding:"30px"}}>
                <Typography variant="h6">Hey, there!</Typography>
                <Typography variant="h6">Already have an account?</Typography>
                <Button variant="contained" color="primary" style={{margin:"16px"}}>Facebook</Button>
                <Button variant="contained" color="primary" style={{margin:"16px"}}>Gmail</Button>
                <Typography variant="h6"> --------------- OR --------------- </Typography>
                <Typography variant="h6">New to Glueberry?</Typography>
                <Button variant="contained" color="primary" style={{margin:"16px"}} onClick={()=>{this.props.history.push("/login/createNewAccount")}}>Create New Account</Button>
                </Paper>
            </div>
        )
    }
}

export default Login;