import "./nav.css";
import Head from "../../images/meme-head.png"

const Nav = () => {
return (
    <div className="header">
        <img src={Head} alt="" className="logo" />
        <h2 className="title">Meme Generator</h2>
    </div>
)
}

export default Nav;