import styled from "styled-components";

export const FieldWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 360px;

  @media all and (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const InputLabel = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: var(--tw-leading, var(--text-2xl--line-height));

  @media all and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Error = styled.div`
  font-weight: 500;
  font-style: italic;
  font-size: 16px;
  color: #912121;
`;
