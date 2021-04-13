import ReactDOM from "react-dom";

interface IModalPortal {
    children: JSX.Element | null;
}

const ModalPortal = ({ children }: IModalPortal) => {
    const el = document.getElementById("modal");
    if (el && children) return ReactDOM.createPortal(children, el);
    return null;
};

export default ModalPortal;
