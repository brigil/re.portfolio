import React from 'react'
import "../styles/Navbar.css";

export const Home = () => {
    return (
        <><div className="body1"> <img class="introPic"
            src="https://i.ibb.co/W5md5yb/1601429749499.jpg" /> <br /> <br /> <br />
            <h3 class="hello">Hi, I'm Web Designer
       <br />
                <span> Brigitte Gil </span></h3>
            <a href="aboutme.html">
                <button className="btn btn-outline-light">
                    Let's Design Together</button></a> </div></>
    )
}
export default Home;