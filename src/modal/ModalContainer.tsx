import ReactDOM from 'react-dom';
import Overlay from './Overlay';

export default function ModalContainer(props: { content: JSX.Element }) {
    const container = <> <Overlay/> {props.content} </>;
    return ReactDOM.createPortal(container, document.body);
}
