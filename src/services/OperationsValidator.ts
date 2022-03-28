import { IOperationsValidator } from "../types/IOperationsValidator";

export class OperationsValidator implements IOperationsValidator {
    private readonly validData = ['+', '-', '*', '/'];
    validate(value: string): boolean {
        return this.validData.includes(value);
    }
}