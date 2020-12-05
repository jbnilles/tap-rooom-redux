import formVisibleReducer from '../../reducers/form-visible-on-page-reducer';

describe('formVisibleReducer', () => {

  let action;


  
  const itemData = true;
  
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });
  
  test('should successfully set form visible to true ', () => {
  
  action = {
    type: 'ADD_KEG',
    
      formVisibleOnPage: true
     
    };
  
    expect(formVisibleReducer({},action)).toEqual(true);
  });

  
});