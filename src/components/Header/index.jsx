import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Header.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/Authentication/userSlice'

const Header = () => {
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  const userState = useSelector(state => state.userData)
  
  return (
    <nav className = "w-full flex flex-wrap py-4 justify-between items-center navbar">
      <Link to ='/'>
        <img src = "/logo1.png" alt = "Rita" className = "pl-8"/>
      </Link>

      <input type="search" id="default-search" class="block w-2/5 p-3 ps-10 text-sm transition-all text-gray-900 border focus:border-red-500 rounded-3xl bg-gray-100 focus:ring-2 focus:ring-red-500" placeholder="Search Mockups, Logos..." required />

      <ul className = "list-none sm:flex hidden justify-end items-center pr-8">
        <li>
          {userState.userData == null 
            ? <span>
              <Link to = '/auth'>Login</Link> |
              <Link to = '/auth/register'>Register</Link> 
            </span>
            
            : <span>
                <Link to = '/manga/favourites'><FavoriteIcon style={{color: "black"}}/></Link> |
                <span onClick = {handleLogout}>Logout</span>
              </span>
          }
        </li>
      </ul>
    </nav>
    // <header className = "header">
    //   <Container>
    //     <Row className = "justify-content-between">
    //       <Col xs = "auto">
    //         <Link to = "/" className = "header__title header__link">
    //           <img src = "/logo1.png" alt = "logo1"/>
    //         </Link>
    //       </Col>

    //       <Col xs = "auto">
    //         {userState.userData == null 
    //           ? <span>
    //             <Link to = '/auth'>Login</Link> |
    //             <Link to = '/auth/register'>Register</Link> 
    //           </span>
              
    //           : <span>
    //               <Link to = '/manga/favourites'><FavoriteIcon style={{color: "black"}}/></Link> |
    //               <span onClick = {handleLogout}>Logout</span>
    //             </span>
    //         }
    //       </Col>
    //     </Row>
    //   </Container>
    // </header>
  )
}

export default Header