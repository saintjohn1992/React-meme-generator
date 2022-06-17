import "./meme.css"


const Meme = () => {

    return (
    <div classname="main">
        <form className="form">
            
            <input type="text" className="form-input" placeholder="top-text" required={true} />
    
            <input type="text" className="form-input" placeholder="bottom-text" required={true} />

            <button className="form-button">Get a new meme image</button>
        
            
        </form>
    </div>    
    )
}

export default Meme;