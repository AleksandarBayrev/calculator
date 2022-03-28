import React from 'react';
import './NumberButton.css';

export type NumberButtonProps = {
    buttonDomId: string;
    value: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export class NumberButton extends React.Component<NumberButtonProps> {
    render() {
        return (
            <button id={this.props.buttonDomId} key={this.props.buttonDomId} className={'button'} onClick={this.props.clickHandler}>{this.props.value}</button>
        )
    }
}