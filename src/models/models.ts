export interface IObject {
  id: number;
  title: string;
  description?: string;
}
export interface ICategory {
  title: string;
  description: string;
  status: string;
}

export interface IButtonProps {
  handleButtonClick: () => void;
  buttonIsActive: boolean;
  disable?: () => boolean;
}
