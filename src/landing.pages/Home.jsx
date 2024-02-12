import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageContent from "../component/PageContent";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export default function Home() {
    return (
        <PageContent className="min-h-screen">
            <Title>Home</Title>
            <FontAwesomeIcon icon={faFacebook} />
            <img src="img/logo.png" alt="Logo" />
        </PageContent>
    );
}

const Title = styled.h1`
    background: red;
`;
