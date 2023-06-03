import { Avatar } from './Avatar';
import { Menu } from './Menu';
import './styles/JhcLanding.scss'

function JhcLanding() {
    return (
        <div className="home-container">
            <Avatar />
            <Menu />
        </div>
    )
}

export default JhcLanding;