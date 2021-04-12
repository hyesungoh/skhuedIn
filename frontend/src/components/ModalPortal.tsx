import ReactDOM from "react-dom";

interface IModalPortal {
    children: JSX.Element;
}

const ModalPortal = ({ children }: IModalPortal) => {
    const el = document.getElementById("modal");
    return el ? ReactDOM.createPortal(children, el) : null;
};

export default ModalPortal;
