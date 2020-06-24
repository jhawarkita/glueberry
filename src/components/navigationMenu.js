import React from "react";
import { Drawer, List, ListItem, Divider, IconButton, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {updateDisplayCategory} from "../redux/actions";
import store from "../redux/store";
import {connect} from "react-redux";
import {withRouter} from "react-router"; 


//Fetch category from API only

class NavigationMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawerOpen: false,
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.loadGrid = this.loadGrid.bind(this);
    }

    toggleDrawer() {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    loadGrid(item){
        this.props.dispatch(updateDisplayCategory(item));
        this.props.history.push("/display")
    }

    render() {
        return (
            <div>
                <IconButton onClick={this.toggleDrawer}>
                    <MenuIcon color="secondary"></MenuIcon>
                    <Drawer anchor="left" open={this.state.drawerOpen} onClose={this.toggleDrawer}>
                    <List>
                        <ListItem>
                            <ListItemText primary="Home"></ListItemText>
                        </ListItem>
                        <Divider></Divider>
                        <ListItem button onClick={() => { this.loadGrid("Gift Hampers") }}>
                            <ListItemText primary="Gift Hampers"></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { this.loadGrid("Decoupage Wall Plate") }}>
                            <ListItemText primary="Decoupage Wall Plates"></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { this.loadGrid("Handmade card") }}>
                            <ListItemText primary="Handmade Cards"></ListItemText>
                        </ListItem>
                        <ListItem button onClick={() => { this.loadGrid("Magnets") }}>
                            <ListItemText primary="Quirky Magnets"></ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
                </IconButton>
                
            </div>)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => {
            dispatch(action)
        }
    }
}
export default withRouter(connect(null, mapDispatchToProps)(NavigationMenu));
