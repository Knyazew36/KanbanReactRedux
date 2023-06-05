import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const useNotCategory = (categoryTitle: string) => {
  const data = useSelector((state: RootState) => state.tasks);
  const newData = data.filter((el) => el.status !== categoryTitle);

  return newData;
};
export default useNotCategory;
