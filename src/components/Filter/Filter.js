import { FilterInput } from "./Filter.styled";
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, setFilter } from 'redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
    const filter = useSelector(getFilterValue);

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput type="text"  value={filter} onChange={evt => dispatch(setFilter(evt.target.value))} />
    </>
  );
}