import "../style/css/style.css";
import FormConnect from "./components/FormConnect";
import { Route } from "react-router-dom";

export default function Connect() {
    return (
        <Route path="/connect">
            <main className="mainConnect">
                <FormConnect />
            </main>
        </Route>
    )
}