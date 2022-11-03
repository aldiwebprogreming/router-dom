
import { useParams } from "react-router-dom";
const Profil = () => {

    const param = useParams();
    
    return(

        <div style={{ textAlign: 'center' }}>
            <h4>Halaman Profil {param.username}</h4>
        </div>
    )
}
export default Profil;