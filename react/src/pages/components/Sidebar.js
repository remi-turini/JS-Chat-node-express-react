import usersIcon from '../../img/users-solid.svg'
import Users from "./Users";
import '../../style/css/style.css';

export default function Sidebar() {
    return (
        <nav>
            <div className="roomName">
                <img src={usersIcon} alt="Comment icon"/>
                <h3>Room name :</h3>
                <p id="room-name">ReactJS</p>
            </div>
            <Users />
        </nav>
    )
}