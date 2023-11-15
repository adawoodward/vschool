// import { Container, FormControl, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"
import koBeautyLogo from '../assets/koBeautyLogo.png'

const Header = () => {
    return (
        <div>
            <div className="logo-container">
                <img src={koBeautyLogo} />
            </div>
            {/* <div className="topnav">
                <Link to="/">Shopping Cart</Link>
            </div> */}

            {/* <div className="search-container">
                <form action="/action_page.php">
                <input type="text" placeholder="Search a product or a brand.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div> */}
        </div>
    )   
}

export default Header

