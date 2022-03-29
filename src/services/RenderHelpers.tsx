import React from "react";
import { ClearButton } from "../components/ClearButton";
import { NumberButton } from "../components/NumberButton";
import { IRenderHelpers } from "../types/IRenderHelpers";

export class RenderHelpers implements IRenderHelpers {
    renderRow(baseId: string, values: string[], clickHandler: React.MouseEventHandler<HTMLButtonElement>) {
        const columns: JSX.Element[] = [];
        for (let i = 0; i < values.length; i++) {
            columns.push(<NumberButton buttonDomId={`button-${values[i]}`} value={values[i]} clickHandler={clickHandler} />)
        }
        return (
            <div className={`row-${baseId}`}>
                {columns.map(x => x)}
            </div>
        );
    }

    renderMathOperations(baseId: string, clickHandler: React.MouseEventHandler<HTMLButtonElement>, evalClickHandler: React.MouseEventHandler<HTMLButtonElement>, clearClickHandler: React.MouseEventHandler<HTMLButtonElement>) {
        const values: string[] = ['+', '-', '*', '/'];
        const columns: JSX.Element[] = [];
        for (let i = 0; i < values.length; i++) {
            columns.push(<NumberButton buttonDomId={`button-${values[i]}`} value={values[i]} clickHandler={clickHandler} />)
        }
        columns.push(<NumberButton buttonDomId={'button-='} value={'='} clickHandler={evalClickHandler} />)
        columns.push(<ClearButton buttonDomId={'button-clear'} clickHandler={clearClickHandler} />)
        return (
            <div className={`row-${baseId}`}>
                {columns.map(x => x)}
            </div>
        );
    }
}