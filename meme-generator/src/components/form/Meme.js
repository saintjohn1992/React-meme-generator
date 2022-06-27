import "./meme.css";
import MemeData from "../../MemeData.js";
import {BsFillImageFill} from "react-icons/bs";
import {useState} from "react";


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(MemeData)


    

    function getMemeImage () {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme, 
            randomImg: url
        }))
    }

    return (
    <main>
        <div className="form">
            
            <input type="text" className="form-input" placeholder="top-text" required={true} />
    
            <input type="text" className="form-input" placeholder="bottom-text" required={true} />

            <button className="form-button" onClick = {getMemeImage}>Get a new meme image <BsFillImageFill /></button>
        
            
        </div>
        <img src={meme.randomImg} alt="" className="meme-img" />
    </main>    
    )
}

export default Meme;