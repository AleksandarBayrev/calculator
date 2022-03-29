export interface IRenderHelpers {
    renderRow(baseId: string, values: string[], clickHandler: React.MouseEventHandler<HTMLButtonElement>): JSX.Element
    renderMathOperations(baseId: string, clickHandler: React.MouseEventHandler<HTMLButtonElement>, evalClickHandler: React.MouseEventHandler<HTMLButtonElement>, clearClickHandler: React.MouseEventHandler<HTMLButtonElement>): JSX.Element
}