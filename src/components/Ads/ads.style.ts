import { color } from "@/constant/color";
import { Interface_Img } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 12px 16px;
  width: 100%;
  min-height: 48px;
  border: 1px solid ${color.a1};
  border-radius: 24px;
  background: #ffffff;

  @media all and (min-width: 1024px) {
    width: 560px;
  }
`;

export const Title = styled.div`
  color: ${color.a2};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const Description = styled.div`
  color: ${color.a2};
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const Close = styled.img<Interface_Img>`
  position: absolute;
  top: -12px;
  right: -16px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
