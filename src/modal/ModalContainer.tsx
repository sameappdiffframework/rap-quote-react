import ReactDOM from 'react-dom';
import Overlay from './Overlay';

export default function ModalContainer(props: { children: JSX.Element}) {
    const container = <><Overlay/> {props.children}</>;
    return ReactDOM.createPortal(container, document.body);
}
