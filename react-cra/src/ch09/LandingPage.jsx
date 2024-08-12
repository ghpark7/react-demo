import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const onClickLogin = () => {
        setIsLoggedin(true);
    };

    const onClickLogout = () => {
        setIsLoggedin(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedin={isLoggedin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
        <div style={{ padding: 16}}>Conditional Rendering</div>
        </div>
    );
}

export default LandingPage;