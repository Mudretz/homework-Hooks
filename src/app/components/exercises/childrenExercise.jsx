import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component value={1}/>
            <Component value={2}/>
            <Component value={3}/>
        </CollapseWrapper>
    );
};

export const Component = ({ isCountComponent }) => {
    return <div>{isCountComponent}. Компонент списка</div>;
};

Component.propTypes = {
    isCountComponent: PropTypes.any
};

export default ChildrenExercise;
