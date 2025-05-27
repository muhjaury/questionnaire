export type Question_Type = {
  number?: number | undefined;
  children?: string | undefined;
  selectedValue?: string | undefined;
  setFieldValue?: (...props: any) => any | undefined;
  firstValue?: string | undefined;
  secondValue?: string | undefined;
};
