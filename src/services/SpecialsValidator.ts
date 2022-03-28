import { ISpecialsValidator } from "../types/ISpecialsValidator";

export class SpecialsValidator implements ISpecialsValidator {
    private readonly validData = ['.'];
    validate(value: string): boolean {
        return this.validData.includes(value);
    }
}