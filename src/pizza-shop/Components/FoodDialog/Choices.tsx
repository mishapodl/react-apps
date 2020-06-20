import React, { Fragment } from "react";
import { FoodInterface } from "../../utils";

interface ChoicesProps {
    openFood: FoodInterface;
    choiceRadio: any;
}

export const Choices = ({ openFood, choiceRadio }: ChoicesProps) => {
    return (
        <Fragment>
            <h3>Chose one</h3>
            {openFood.choices.map((choice: any, index: number) => (
                <Fragment key={index}>
                    <input
                        type="radio"
                        name="choice"
                        id={choice}
                        value={choice}
                        onChange={choiceRadio.onChange}
                        checked={choiceRadio.value === choice}
                    />
                    <label htmlFor={choice}>{choice}</label>
                </Fragment>
            ))}
        </Fragment>
    );
};
