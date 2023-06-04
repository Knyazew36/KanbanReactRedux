import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useCategory = (categoryTitle: string) => {
  const data = useSelector((state: RootState) => state.tasks);
  const newData = data.find((category) => category.title === categoryTitle);

  return newData?.categoryItems;
};

export default useCategory;
