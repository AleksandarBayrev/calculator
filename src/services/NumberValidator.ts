import { INumberValidator } from "../types/INumberValidator";

export class NumberValidator implements INumberValidator {
    private readonly validData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    validate(value: string): boolean {
        return this.validData.includes(value);
    }
}