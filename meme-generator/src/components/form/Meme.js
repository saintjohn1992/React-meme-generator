import "./meme.css";
import MemeData from "../../MemeData.js";
import {BsFillImageFill} from "react-icons/bs";
import {useState} from "react";


const Meme = () => {

    const [memeImage, setMemeImage] = useState("")

    

    function getMemeImage () {
        const memesArray = MemeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
    <main>
        <div className="form">
            
            <input type="text" className="form-input" placeholder="top-text" required={true} />
    
            <input type="text" className="form-input" placeholder="bottom-text" required={true} />

            <button className="form-button" onClick = {getMemeImage}>Get a new meme image <BsFillImageFill /></button>
        
            
        </div>
        <img src={memeImage} alt="" className="meme-img" />
    </main>    
    )
}

export default Meme;