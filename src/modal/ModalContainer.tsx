import Overlay from './Overlay';

export default function ModalContainer(props: { content: JSX.Element }) {
    return (
        <>
            <Overlay/>
            {props.content}
        </>
    );
}
