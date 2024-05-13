import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import './nav.css';

const Nav = ()=>{
    return (
        <div className="nav">
           <HomeOutlinedIcon />
           <PersonOutlineOutlinedIcon />
           <BusinessCenterOutlinedIcon />
           <AccountTreeOutlinedIcon/>
           <ArticleOutlinedIcon />
           <MailOutlineOutlinedIcon />
        </div>
    )
}
export default Nav;