import React from "react";
import { Typography, Link, Paper } from "@material-ui/core"
import {Instagram, Facebook} from "@material-ui/icons"
class Footer extends React.Component {
    render() {
        return (
            <Paper elevation={0} style={{textAlign:"center", padding:"20px"}}>
                <Link href="https://www.instagram.com/_glueberry_/" color="secondary"><Instagram></Instagram></Link>
                <Link href="https://www.facebook.com/Glueberry-833320933721093" color="secondary"><Facebook></Facebook></Link>
            <Typography variant="h6"> Glueberry.com</Typography>
            <Typography> Grevillea, Magarpatta City, Pune, Maharashtra</Typography>
            </Paper>
        )
    }
}

export default Footer;