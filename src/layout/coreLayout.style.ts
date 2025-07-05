import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media all and (min-width: 768px) {
    padding: 32px 128px;
  }
`;
