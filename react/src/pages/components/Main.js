import sendIcon from '../../img/paper-plane-solid.svg';
import '../../style/css/style.css';
import Messages from "./Messages";

export default function Main() {
    return (
        <main className="mainChat">
            <div className="displayMsg">
                <Messages />
            </div>
            <form id="chat-form">
                <input type="text" id="msg" placeholder="Enter a message" />
                <button><img src={sendIcon} alt="send icon" />Send</button>
            </form>
        </main>
    )
}

