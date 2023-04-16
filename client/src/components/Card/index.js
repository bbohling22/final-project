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
        <div>
        <div className="columns is-clearfix m-6">
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image1} alt="batman slaps robin meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10">
            <img src={image2} alt="guy crying on the floor meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image3} alt="jealous girlfriend meme"></img>
        </div>
        </div>
        </div>
        <div className="columns is-clearfix m-6">
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image4} alt="side eye monkey meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image5} alt="mocking spongbob meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image6} alt="this is fine meme"></img>
        </div>
        </div>
        </div>
        <div className="columns is-clearix m-6">
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image7} alt="sqidward glairs at spongbob meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image8} alt="push the right button meme"></img>
        </div>
        </div>
        <div className="tile">
        <div className="column is-10" class="card">
            <img src={image9} alt="draw 25 uno meme"></img>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Card