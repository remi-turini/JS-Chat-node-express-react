import logo from "../../img/logo.svg";
import "../../style/css/style.css";

export default function Header () {
    return (
        <header>
            <img src={logo} alt="Logo" />

            <button>
                <a href="connect">Leave Room</a>
            </button>
        </header>

    )
}
