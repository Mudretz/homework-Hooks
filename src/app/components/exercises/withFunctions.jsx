import React from "react";
import Card from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = localStorage.getItem("auth");
    return (
        <Card>
            <SimpleComponent onLogin={onLogin} onLogOut={onLogOut} isAuth={isAuth} />
        </Card>
    );
};

export default withFunctions;
