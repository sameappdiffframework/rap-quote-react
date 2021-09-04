import ModalContent from './ModalContent';
import Overlay from './Overlay';

export default function ModalContainer(props: { onSubmit: () => void, onReset: () => void }) {
    return (
        <>
            <Overlay/>
            <ModalContent onReset={props.onReset} onSubmit={props.onSubmit}/>
        </>
    );
}
