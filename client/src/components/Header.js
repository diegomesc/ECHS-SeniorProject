import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FileUpload from './Files/FileUpload';
import './Header.css'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const goFeatures = () => {
    navigate('/features')
  }

  const goHome = () => {
    navigate("/");
    navigate(0);
  }

  const [menuState, setMenu] = useState(null);

  const toggleMenu = () => {
    if (!menuState) {
      setMenu("display")
    }
    else {
      setMenu(null);
    }
  }

  return (
    <div className="header">
      <div className={'menu__backdrop ' + (!menuState ? '' : 'display')} onClick={toggleMenu}/>
      <div className={'menu__container ' + (!menuState ? '' : 'display')}>
        <div className="logo__container__menu">
          <img className="logo" src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" width="40px" height="40px" alt="test" />
          <div className="header__text" onClick={goHome}>Drove</div>
        </div>
        <FileUpload />
      <div className={'sidebar__tab ' + (pathname === '/' ? 'current' : 'inactive')} onClick={goHome}>
        <StorageRoundedIcon className="sidebar__icon"/>
        <div className="sidebar__text">My Drove</div>
      </div>
      <div className={'sidebar__tab ' + (pathname === '/features' ? 'current' : 'inactive')} onClick={goFeatures}>
        <StarBorderPurple500RoundedIcon className="sidebar__icon"/>
        <div className="sidebar__text">Features</div>
      </div>
      </div>
      <div className="menu__icon__container">
        <MenuRoundedIcon fontSize="large" className="menu__icon" onClick={toggleMenu}/>
      </div>
      <div className="logo__container">
        <img className="logo" src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" width="40px" height="40px" alt="test" />
        <div className="header__text" onClick={goHome}>Drove</div>
      </div>
      <div className="credits__container">
        <SearchIcon className="credits__icon"/>
        <div className="credits__text">
          Created by Diego Escobar
        </div>
      </div>
    </div>
  )
}

export default Header;