import React from "react";
import "./login.scss";

export default function Login(props) {
    return (
        <div>
            <div className="box_login">
                <h2><u><b>Login</b></u></h2>
                <form>
                    <div className="inputbox_login">
                        <input type="text" name="" required=""/>
                        <label>Username</label>
                    </div>
                    <div className="inputbox_login">
                        <input type="password" name="" required=""/>
                        <label>Password</label>
                    </div>
                    <input type="submit" name="" value="Submit"/>
                </form>
                </div>
        </div>
    );
}