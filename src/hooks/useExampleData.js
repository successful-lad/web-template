import { useMemo, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, clearRepos } from "../actions/exampleActions";

import { getExampleData } from '../reducers';

const utilsSelector = (state, initialValue) =>
  getExampleData(state) ?? initialValue;

export default () => {
  const selector = useCallback(state => ({
    data: utilsSelector(state, []),
  }), []);

  const data = useSelector(selector);
  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
      onGet: input => getRepos(input),
      onClear: () => clearRepos(),
    }, dispatch),
    [dispatch]);

  return {
    ...data,
    ...actions,
  };
}