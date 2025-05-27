import { color } from "@/constant/color";
import { Interface_Components } from "@/interface";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Btn = styled.button<Interface_Components>`
  padding: 8px 16px;
  color: ${color.a2};
  font-weight: 600;
  background: ${color.a5};
  border-radius: 16px;
  border: 1px solid ${color.a5};
  ${({ removeshadow }) =>
    removeshadow !== "Y" &&
    `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);`}
  min-width: ${({ width }) => (width ? width : "80px")};
  min-height: ${({ height }) => (height ? height : "32px")};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${color.a4};
    color: ${color.a2};
    border: 1px solid ${color.a4};
  }
`;
