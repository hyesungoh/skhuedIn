import useSlide from "hook/useSlide";

interface ContentProps {
    onClickNext: () => void;
}

const Content = ({ onClickNext }: ContentProps) => {
    return (
        <div>
            content
            <button onClick={onClickNext}>next</button>
        </div>
    );
};

export default Content;
