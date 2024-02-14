import {Link} from 'react-router-dom';
import { PiCookingPotBold } from "react-icons/pi";

function NotFound(){
    return(
            <section className='NotFound'>
              <div className='NotFound-container'>
              <h1><strong>Oops... </strong></h1>
                <h3>This Page is Undercooked!</h3>
                <PiCookingPotBold style={{width: "500px", height: "500px"}}/>
                <Link to="/"><p className='link'>Go to Home Page</p></Link>
              </div>
            </section>
            
        )
    }


export default NotFound