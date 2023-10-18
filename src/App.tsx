import styled from "styled-components";

function App() {
  const Contianer = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;

  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <div>
      <Contianer>
        <H1>Hello</H1>
      </Contianer>
    </div>
  );
}

export default App;
