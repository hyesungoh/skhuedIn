import styled from "styled-components";

interface StyledButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    label: string;
    onClick?: () => void;
    width?: string;
    height?: string;
}

const StyledButton = ({
    type,
    label,
    onClick,
    width,
    height,
}: StyledButtonProps) => {
    return (
        <StyledBtn width={width} height={height} type={type} onClick={onClick}>
            {label}
        </StyledBtn>
    );
};

export default StyledButton;

interface BtnProps {
    width?: string;
    height?: string;
}
const StyledBtn = styled.button<BtnProps>`
    all: unset;
    align-self: flex-end;
    text-align: center;

    width: ${({ width }) => (width ? `${width}px` : `120px`)};
    height: ${({ height }) => (height ? `${height}px` : `46px`)};
    border-radius: ${({ theme }) => theme.border_intensity};

    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s, color 0.3s;

    cursor: pointer;
    &:hover {
        color: white;
        background-color: ${({ theme }) => theme.colors.emph};
    }
`;
