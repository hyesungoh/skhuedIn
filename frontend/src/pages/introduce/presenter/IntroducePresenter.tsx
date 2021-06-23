import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Introduce from "components/Introduce/Introduce";
import HowTo from "components/Introduce/HowTo";

const IntroducePresenter = () => {
    const [category, setCategory] =
        useState<"introduce" | "howto">("introduce");

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const {name} = e.target as HTMLButtonElement;     
        if (name === "introduce" || name === "howto") setCategory(name);
    }
    
    return (
        <div>
            <button onClick={onClick} name="introduce">introduce</button>
            <button onClick={onClick} name="howto">howto</button>

            <TransitionGroup>
                <CSSTransition key={category} classNames="slide" timeout={1000}>
                    {category === "introduce" ? <Introduce /> : <HowTo />}
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default IntroducePresenter;
