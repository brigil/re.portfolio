import React from 'react'
import "../styles/Navbar.css";

export const Home = () => {
    return (
        <><div className="body1"> <img className="introPic"
            src="https://i.ibb.co/W5md5yb/1601429749499.jpg" /> <br /> <br /> <br /><br />
            <h3 class="hello"><img
            src="https://fontmeme.com/permalink/201201/e52efc48454378556909114857a9771a.png" />
       <br />
       <img
            src="https://fontmeme.com/permalink/201201/d7f606b1509508702855049f85d30123.png"/></h3>
            <a href="/aboutme"><br /><br /><br />
                <button className="btn btn-outline-light">
                    Let's Design Together</button></a> </div></>
    )
}
export default Home;