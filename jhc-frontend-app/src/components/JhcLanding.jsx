import { Avatar } from './Avatar';
import TypingEffect from './TypingEffect';
import './styles/JhcLanding.scss'

function JhcLanding() {
    return (
        <div className="home-container">
            <div className="avatar">
                <Avatar />
            </div>
            <div className="typing">
                <TypingEffect />
            </div>
        </div>
    )
}

export default JhcLanding;