export type ItemLayout = 'vertical' | 'grid' | 'horiztonal';
export type OptionVariant = 'default' | 'checkbox';

export interface TestSheetType {
  standardScore: number;
  required: {
    title?: string;
    description?: string;
    items: Item[];
  };
  optional?: {
    title?: string;
    description?: string;
    items: Item[];
  };
}

export interface Item {
  name: string;
  title: string;
  description?: string;
  isMulti?: boolean;
  options?: Option[];
  subItems?: SubItem[];
  limit?: number;
  total: number;
  layout?: ItemLayout;
  optionVariant?: OptionVariant;
}

export interface SubItem {
  name: string;
  title: string;
  description?: string;
  options: Option[];
  layout?: ItemLayout;
  optionVariant?: OptionVariant;
}

export interface Option {
  title: string;
  score: number;
  label?: string;
}
