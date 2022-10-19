export type dataItemArrayItem = {
  key: number;
  label: string;
  disabled: boolean;
  isCheckout?: boolean;
  index?: number;
};
export type dataItem = Array<dataItemArrayItem>;