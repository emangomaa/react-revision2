
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import '../App.css'
export const Navbar = ()=>{
    return(
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">Navbar</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                         <Link className="nav-link" to="/about">About</Link>
//                         </li>
                        
//                     </ul>
//                     </div>
//                 </div>
// </nav>
//         </>


//**********use NavLink for Active Links ************* */
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
    )
}