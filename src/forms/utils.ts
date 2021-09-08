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

export function isEmptyString(str: string): boolean {
    return str === null || str === undefined || str.length === 0 || str.match(/^ *$/) !== null;
}

const maxLength: ValidatorFnFactory = (maxLength: number) => (ele: FormControl) => {
    return (ele?.value?.length <= maxLength) ? {} : { maxLength: true };
};
const required: ValidatorFn = (ele: FormControl) => {
    return (!isEmptyString(ele?.value)) ? {} : { required: true };
};
export const VALIDATORS = {
    required: required,
    maxLength: maxLength
};

function validateChange(
    { target }: ChangeEvent<FormControl>,
    validators: ValidatorFn[],
    onChange: (value: string) => void,
    onErrorChange: (errors: ValidationErrors) => void
) {
    target.classList.add(DIRTY_CLASS);
    const errors: ValidationErrors = validators
        .map(validator => validator(target))
        .reduce((sum, err) => Object.assign(sum, err), {});
    if (Object.keys(errors).length === 0) {
        target.classList.remove(INVALID_CLASS);
    } else {
        target.classList.add(INVALID_CLASS);
    }
    onChange(target.value);
    onErrorChange(errors);
}

const NO_OP = () => {
};

export function ControlChangeFactory<T extends FormControl>(
    validators: ValidatorFn[],
    onChange: (value: string) => void = NO_OP,
    onErrorChange: (errors: ValidationErrors) => void = NO_OP
): ChangeEventHandler<T> {
    return (event: ChangeEvent<T>) => {
        validateChange(event, validators, onChange, onErrorChange);
    };
}

export function touchOnBlur({ target }: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    target.classList.add(TOUCHED_CLASS);
}
