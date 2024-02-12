import {Link} from 'react-router-dom';

function NotFound(){
    return(
            <section>
                <p>Oops... we did not find the page you were looking for.</p>
                <Link to="/">Go to Home Page</Link>
            </section>
            
        )
    }


export default NotFound

