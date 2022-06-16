import React from "react";
import styled from "styled-components";
import BgImg from "../assets/webmull-bg.png";

const Section = styled.section`
  background-image: url(${BgImg});
  height: 785px;
`;
const Content = styled.div``;
const Left = styled.div``;
const Title = styled.p``;
const Desc = styled.p``;
const Button = styled.a``;

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            <Desc />
            <Button />
          </Title>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
