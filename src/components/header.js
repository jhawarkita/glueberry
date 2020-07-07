import React from "react";
import { AppBar, Typography, Toolbar, IconButton, InputBase } from "@material-ui/core"
import {Person,ShoppingCart, Search, Favorite} from "@material-ui/icons"
import NavigationMenu from "./navigationMenu";
import {withRouter} from "react-router"

class Header extends React.Component {
    render() {
        return (
            <AppBar style={{ position: "relative" }}>
                <Toolbar>
                    <NavigationMenu></NavigationMenu>
                    <Typography style={{flexGrow:1, color:"secondary"}}>
                        Glueberry
                </Typography>
                <Search></Search>
                <InputBase placeholder="Search"></InputBase>
                <IconButton onClick={()=>{this.props.history.push("/favorites")}}><Favorite color="secondary"></Favorite></IconButton>
                <IconButton><ShoppingCart color="secondary"></ShoppingCart></IconButton>
                <IconButton><Person color="secondary"></Person></IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withRouter(Header);