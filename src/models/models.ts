export interface ICategory {
  id: number;
  title: string;
  description?: string;
  status: string;
}

export interface IButtonProps {
  handleButtonClick: () => void;
  buttonIsActive: boolean;
  isDisabled?: boolean;
}
