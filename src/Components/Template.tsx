import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Content = styled.div``;

type TemplateProps = {
  children?: React.ReactNode;
};

function Template({ children }: TemplateProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

export default Template;
