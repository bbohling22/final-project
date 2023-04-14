import image1 from "../../assets/pic1.jpg"
import image2 from "../../assets/pic2.jpg"
import image3 from "../../assets/pic3.jpg"
import image4 from "../../assets/pic4.png"
import image5 from "../../assets/pic5.jpg"
import image6 from "../../assets/pic6.jpg"
import image7 from "../../assets/pic7.png"
import image8 from "../../assets/pic8.jpg"
import image9 from "../../assets/pic9.jpg"


const Card = () => {
   
    return (
        <><div className="card">
            <img src={image1}></img>
        </div>
        <div className="card">
            <img src={image2}></img>
        </div>
        <div className="card">
            <img src={image3}></img>
        </div>
        <div className="card">
            <img src={image4}></img>
        </div>
        <div className="card">
            <img src={image5}></img>
        </div>
        <div className="card">
            <img src={image6}></img>
        </div>
        <div className="card">
            <img src={image7}></img>
        </div>
        <div className="card">
            <img src={image8}></img>
        </div>
        <div className="card">
            <img src={image9}></img>
        </div></>
    );
}

export default Card