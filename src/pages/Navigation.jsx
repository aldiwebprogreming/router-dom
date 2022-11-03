
import { Link } from "react-router-dom";

const Navigation = () => {

  
    
    return(
        <div style={{ textAlign: 'center' }}>
            <h4>Belajar React Router Dom</h4>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='profil'>Profil</Link> | {" "}
                <Link to='about'>About</Link>
            </nav>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Navigation;