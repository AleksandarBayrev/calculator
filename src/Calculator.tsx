import React from 'react';
import './Calculator.css';
import { ClearButton } from './components/ClearButton';
import { NumberButton } from './components/NumberButton';
import { Result } from './components/Result';
import { INumberValidator } from './types/INumberValidator';
import { IOperationsValidator } from './types/IOperationsValidator';
import { ISpecialsValidator } from './types/ISpecialsValidator';

export type CalculatorProps = {
    numberValidator: INumberValidator;
    operationsValidator: IOperationsValidator;
    specialsValidator: ISpecialsValidator;
}

export type CalculatorState = {
    value: string;
}

export class Calculator extends React.Component<CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    private renderRow(baseId: string, values: string[], clickHandler: React.MouseEventHandler<HTMLButtonElement>) {
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

    private renderMathOperations(baseId: string, clickHandler: React.MouseEventHandler<HTMLButtonElement>, evalClickHandler: React.MouseEventHandler<HTMLButtonElement>, clearClickHandler: React.MouseEventHandler<HTMLButtonElement>) {
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

    private addToValue = (valueToAdd: string) => {
        const lastChar = this.state.value.charAt(this.state.value.length - 1);
        if (!this.tryAddFirstSymbol(valueToAdd)) {
            return;
        }
        this.tryAddOperation(valueToAdd, lastChar);
        this.tryAddNumber(valueToAdd);
        this.tryAddSpecials(valueToAdd, lastChar);
    }

    private tryAddFirstSymbol(valueToAdd: string) {
        const isSymbolValid = this.props.operationsValidator.validate(valueToAdd);
        const isValid = this.state.value.length === 0 && isSymbolValid;
        if (isValid) {
            this.setState({
                value: isSymbolValid && valueToAdd === '-' ? '-' : this.state.value 
            });
        }
        return isValid || (this.state.value.length && this.state.value.charAt(0) === '-' || this.props.numberValidator.validate(this.state.value.charAt(0)));
    }

    private tryAddOperation(valueToAdd: string, lastChar: string) {
        if (this.props.operationsValidator.validate(valueToAdd)) {
            const valueWithValidLastChar = this.state.value.substring(0, this.state.value.length - 1) + valueToAdd;
            const valueWithInvalidLastChar = this.state.value + valueToAdd;
            this.setState({
                value: !this.props.operationsValidator.validate(lastChar) ? valueWithInvalidLastChar : valueWithValidLastChar
            });
        }
    }

    private tryAddNumber(valueToAdd: string) {
        if (this.props.numberValidator.validate(valueToAdd)) {
            this.setState({
                value: this.state.value + valueToAdd
            });
        }        
    }

    private tryAddSpecials(valueToAdd: string, lastChar: string) {
        if (this.props.specialsValidator.validate(valueToAdd) && lastChar != valueToAdd) {
            this.setState({
                value: this.state.value + valueToAdd
            });
        }
    }

    private evaluate = () => {
        const lastValue = this.state.value.at(this.state.value.length - 1);
        if (lastValue && this.props.numberValidator.validate(lastValue)) {
            this.setState({
                value: eval(this.state.value)
            });
        }
    }

    private clear = () => {
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <div className={'content'}>
                <div className={'text-white text-large'}>Hello</div>
                <div className={'keyboard'}>
                    {this.renderRow('1', ['0', '1', '2', '3'], (e) => this.addToValue(((e.target) as any).innerText))}
                    {this.renderRow('2', ['4', '5', '6', '7'], (e) => this.addToValue(((e.target) as any).innerText))}
                    {this.renderRow('3', ['8', '9', '.'], (e) => this.addToValue(((e.target) as any).innerText))}
                    {this.renderMathOperations('4', (e) => this.addToValue(((e.target) as any).innerText), (e) => this.evaluate(), () => this.clear())}
                    <Result value={this.state.value} />
                </div>
            </div>
        )
    }
}