import TextInputWithLabel from "components/TextInputWithLabel";

interface ContentProps {
    onClickNext: () => void;
}

const Content = ({ onClickNext }: ContentProps) => {
    return (
        <div>
            <input type="file" />
            <TextInputWithLabel
                name="content"
                placeholder="하이여"
                onChange={() => {}}
            />
            <button onClick={onClickNext}>next</button>
        </div>
    );
};

export default Content;
