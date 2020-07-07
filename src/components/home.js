import React from "react";
import {Carousel} from 'react-responsive-carousel'
import DataItems from "../data"
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.featuredImgList = [];
        DataItems.map(item => { item["Featured"] === true && this.featuredImgList.push(item)})
    }
    render() {
        return(
                <Carousel>
                   {this.featuredImgList.map(item=>{
                        return <div>
                           <img src={require("../productImages/"+item["Image"])}></img>
                       </div>
                   })}
                </Carousel>

        )
    }
}
export default Home;
