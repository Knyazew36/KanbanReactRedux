export interface IObject {
  id: number;
  title: string;
  description?: string;
}
export interface ICategory {
  title: string;
  categoryItems: IObject[];
}

export interface IButtonProps {
  handleButtonClick: () => void;
  buttonIsActive: boolean;
  disable?: () => boolean;
}
