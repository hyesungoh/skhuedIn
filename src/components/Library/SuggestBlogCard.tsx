import styled from "styled-components";

import { Link } from "react-router-dom";

const SuggestBlogCard = () => {
    return (
        <Box>
            <Link to="/regist">
                책장에 등록하고, 좋은 정보를 나눠주세요 !<UnderSpan></UnderSpan>
            </Link>
        </Box>
    );
};

export default SuggestBlogCard;

const UnderSpan = styled.span`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.bold};
    margin-top: 2px;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;
`;

const Box = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 8px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    & > a {
        all: unset;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        cursor: pointer;
        font-weight: 400;
        transition: color 0.3s;

        &:hover {
            color: ${({ theme }) => theme.colors.bold};
        }

        &:hover > ${UnderSpan} {
            transform: scaleX(1);
        }
    }
`;
