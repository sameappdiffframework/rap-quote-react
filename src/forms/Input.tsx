import { useField } from 'formik';
import { FieldHookConfig } from 'formik/dist/Field';

interface CustomAttributes {
    label: string;
    inputType: 'text' | 'textarea'
}

export default function Input(props: FieldHookConfig<string> & CustomAttributes) {
    const [field, meta] = useField(props);
    const inErrorState = meta.touched && meta.error;
    const className = inErrorState ? 'error' : undefined;
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            {
                props.inputType === 'textarea' &&
                (<textarea className={className} {...field}/>)}
            {
                props.inputType === 'text' &&
                (<input type={props.inputType} className={className} {...field}/>)
            }

            {inErrorState && (<div>{meta.error}</div>)}
        </div>

    );
}
