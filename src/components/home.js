import React from "react";
import {Carousel} from "react-responsive-carousel"
import DataItems from "../data"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.featuredImgList = [];
        DataItems.map(item => { item.Featured === true && this.featuredImgList.push(item)})
    }
    render() {
        console.log(this.featuredImgList)
        return (
           <div>
            <Carousel autoPlay={true} infiniteLoop={true}>
            {
                this.featuredImgList.map((item)=>{
                    return <div>
                        <img src={require("../productImages/"+item["Image"])}></img>
                    </div>
                })
            }
            </Carousel>
           </div>
        )
    }
}
export default Home;