import masterListReducer from '../../reducers/master-list-reducer';

describe('masterListReducer', () => {

  let action;


  
  const itemData = [{
    Name: 'Cat',
    
    quantity: 1,
   
  },
  {
    Name: 'Cat',
    
    quantity: 1,
   
  }];
  
  test('Should return default state if no action type is recognized', () => {
    expect(masterListReducer({}, {type: null})).toEqual({});
  });
  
  test('should successfully return the list of kegs ', () => {
  
  action = {
    type: 'ADD_KEG',
    
     masterList: itemData
     
    };
  
    expect(masterListReducer({},action)).toEqual(itemData);
  });

  
});