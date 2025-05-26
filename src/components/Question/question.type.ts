export type Question = {
  number?: number | undefined;
  children?: string | undefined;
  selectedValue?: string | undefined;
  setFieldValue?: (...props: any) => any | undefined;
  firstValue?: string | undefined;
  secondValue?: string | undefined;
};
