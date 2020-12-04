
import { combineReducers } from 'redux';
import editingReducer from './editing-reducer';
import formVisibleOnPageReducer from './form-visible-on-page-reducer';
import masterListReducer from './master-list-reducer';
import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  masterList: masterListReducer,
  selectedKeg: selectedKegReducer,
  formVisibleOnPage: formVisibleOnPageReducer,
  editing: editingReducer,
});

export default rootReducer;