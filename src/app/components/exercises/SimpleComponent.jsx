import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, onLogOut, onLogin }) => {
    if (isAuth) {
        return (
            <>
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти из системы
                </button>
            </>
        );
    } else {
            return (
                <>
                    <button className="btn btn-primary" onClick={onLogin}>
                        Войти
                    </button>
                </>
            );
        }
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.any,
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func
};

export default SimpleComponent;
