import "./meme.css"


const Meme = () => {

    return (
    <main>
        <form className="form">
            
            <input type="text" className="form-input" placeholder="top-text" required={true} />
    
            <input type="text" className="form-input" placeholder="bottom-text" required={true} />

            <button className="form-button">Get a new meme image</button>
        
            
        </form>
    </main>    
    )
}

export default Meme;