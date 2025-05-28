import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div<Interface_Components>`
  min-width: ${({ width }) => (width ? width : "120px")};
  min-height: ${({ height }) => (height ? height : "32px")};
`;

export const Btn = styled.button<Interface_Components>`
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  color: ${color.a6};
  font-weight: 600;
  background: ${color.a5};
  border-radius: 24px;
  border: 1px solid ${color.a5};
  ${({ removeshadow }) =>
    removeshadow !== "Y" &&
    `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`}
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${color.a4};
    color: ${color.a2};
    border: 1px solid ${color.a4};
  }
`;
