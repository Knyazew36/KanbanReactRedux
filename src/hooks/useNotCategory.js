import { useSelector } from 'react-redux';
const useNotCategory = (categoryTitle) => {
    const data = useSelector((state) => state.tasks);
    const newData = data.filter((el) => el.status !== categoryTitle);
    return newData;
};
export default useNotCategory;
