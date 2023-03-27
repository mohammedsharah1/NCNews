import styled from "styled-components";

const Section = styled.section`
  background-color: #5dacbd;
  height: 50px;
  text-align: center;
`;

const Title = styled.h1`
  margin: initial;
  color: white;
  font-size: 30px;
  font-weight: 400;
`;

const Header = () => {
  return (
    <Section>
      <Title>NC NEWS</Title>
    </Section>
  );
};

export default Header;
