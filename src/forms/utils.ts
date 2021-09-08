import { ChangeEvent, ChangeEventHandler, FocusEvent } from 'react';

type FormControl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export type ValidationErrors = {
    [key: string]: any;
};
export type ValidatorFn = (ele: FormControl) => ValidationErrors;
type ValidatorFnFactory = (arg: number) => ValidatorFn;
export const DIRTY_CLASS = 'dirty';
export const TOUCHED_CLASS = 'touched';
export const INVALID_CLASS = 'invalid';

const maxLength: ValidatorFnFactory = (maxLength: number) => (ele: FormControl) => {
    return (ele?.value?.length <= maxLength) ? {} : { maxLength: true };
};
const required: ValidatorFn = (ele: FormControl) => {
    return (ele?.value) ? {} : { required: true };
};
export const VALIDATORS = {
    required: required,
    maxLength: maxLength
};

function validateChange(
    { target }: ChangeEvent<FormControl>,
    validators: ValidatorFn[],
    onValidChange: (value: string) => void,
    onErrorChange: (errors: ValidationErrors) => void
) {
    target.classList.add(DIRTY_CLASS);
    const errors: ValidationErrors = validators
        .map(validator => validator(target))
        .reduce((sum, err) => Object.assign(sum, err), {});
    if (Object.keys(errors).length === 0) {
        target.classList.remove(INVALID_CLASS);
        onValidChange(target.value);
    } else {
        target.classList.add(INVALID_CLASS);
        onErrorChange(errors);
    }
}

const NO_OP = () => {
};

export function ControlChangeFactory<T extends FormControl>(
    validators: ValidatorFn[],
    onValidChange: (value: string) => void = NO_OP,
    onErrorChange: (errors: ValidationErrors) => void = NO_OP
): ChangeEventHandler<T> {
    return (event: ChangeEvent<T>) => {
        validateChange(event, validators, onValidChange, onErrorChange);
    };
}

export function touchOnBlur({ target }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    target.classList.add(TOUCHED_CLASS);
}
