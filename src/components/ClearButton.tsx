import React from 'react';
import './ClearButton.css';

export type ClearButtonProps = {
    buttonDomId: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export class ClearButton extends React.Component<ClearButtonProps> {
    render() {
        return (
            <button id={this.props.buttonDomId} key={this.props.buttonDomId} className={'button'} onClick={this.props.clickHandler}>CE</button>
        )
    }
}