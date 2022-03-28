import React from 'react';
import './Result.css';

export type ResultProps = {
    value: string;
}

export class Result extends React.Component<ResultProps> {
    render() {
        return (
            <div id={'result'} key={'result'}>
                {this.props.value}
            </div>
        )
    }
}