import { useLocation, useNavigate } from 'react-router-dom';
import FileUpload from './Files/FileUpload';
import './Sidebar.css';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';

function Sidebar() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const goHome = () => {
    navigate("/");
  }

  const goFeatures = () => {
    navigate('/features')
  }

  return (
    <div className="sidebar">
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
  )
}

export default Sidebar;