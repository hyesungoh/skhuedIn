import ReactDOM from "react-dom";

interface IModalPortal {
    children: JSX.Element | null;
}

const ModalPortal = ({ children }: IModalPortal) => {
    const el = document.getElementById("modal");
    return el && children ? ReactDOM.createPortal(children, el) : null;
};

export default ModalPortal;
