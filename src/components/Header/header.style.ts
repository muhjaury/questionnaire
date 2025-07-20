import { color } from "@/constant/color";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 320px;
  background: ${color.a1};
  background: linear-gradient(
    90deg,
    rgba(179, 200, 207, 1) 0%,
    rgba(150, 255, 197, 1) 50%,
    rgba(179, 200, 207, 1) 100%
  );
`;
