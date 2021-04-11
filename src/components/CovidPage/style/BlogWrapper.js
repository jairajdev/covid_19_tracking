import styled from "@emotion/styled";

const BlogWrapper = styled.div`
    width: 25%;
    margin: 20px 20px;
    padding: 0 0 15px 0;
    background: ${props => props.theme.projectColor};
    box-shadow: 0 0 20px 0 ${props => props.theme.projectShadow};
    transition: box-shadow 500ms;
    word-wrap: break-word;
    border-radius: 10px;
    justify-contents: center;
    text-align : center ;
    &:hover {
        box-shadow: 20px 20px 40px 20px ${props => props.theme.projectShadowHover};
    };
    & > div {
        align-items: center;
        padding: 0 15px 0 15px;
    }
    & > span {
        display: inline-block;
        position: relative;
        background: ${props => props.theme.projectColor};
        border-top: 5px solid purple;
        width: 100.5%;
        height: 10px;
        top: -15px;
        left: -1px;
        // transform: rotate(1deg);
    };
    & > img {
        width: 25%;
        max-height: 100px;
        margin: 10px 10px 10px 10px;
    };
    & > div > h3 {
        margin: 0;
        padding: 0;
    };
    & > div > h5 {
        font-size: 12px;
        font-weight: 500;
        opacity: 0.8;
        color: ${props => props.theme.fontColor};
        margin: 10px 0 0 0;
        padding: 0;
        & > a {
            text-decoration: none;
            color: ${props => props.theme.accentColor}
        };
    };
    & > div > p {
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        opacity: 0.9;
    };
    & > div > a {
        cursor: pointer;
        font-size: 13px;
        font-weight: 500;
        color: ${props => props.theme.accentColor};
        text-decoration: none;
    }
    @media (max-width: 1100px) {
        width: 40%;
    }
    @media (max-width: 600px) {
        width: 85%;
        box-shadow: 0 10px 50px 0 ${props => props.theme.projectShadowHover};
        /* text-align: center; */
    }
`;

export default BlogWrapper;