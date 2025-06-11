
import reducers from './calculatorSlice';


test('reducers', () => {
  let state;
  state = reducers({display:'5',expression:['20','÷'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'4',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'55',expression:['1','+'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'56',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'25',expression:['50','−'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'25',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'2',expression:['40','×'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'80',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'4',expression:['80','÷'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'20',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'20',expression:[],overwrite:false}, {type:'calculator/handleButton',payload:'%'});
  expect(state).toEqual({display:'0.2',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'85',expression:[],overwrite:false}, {type:'calculator/handleButton',payload:'+/-'});
  expect(state).toEqual({display:'-85',expression:[],overwrite:false});
});
test('reducers', () => {
  let state;
  state = reducers({display:'2',expression:['71','+','4','×'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'79',expression:[],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'0',expression:['2','÷'],overwrite:false}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'Error',expression:[],overwrite:true});
});

test('reducers', () => {
  let state;
  state = reducers({display:'20.5',expression:[],overwrite:true}, {type:'calculator/handleButton',payload:'AC'});
  expect(state).toEqual({display:'0',expression:[],overwrite:false});
});
test('reducers', () => {
  let state;
  state = reducers({display:'0.9',expression:[],overwrite:true}, {type:'calculator/handleButton',payload:'−'});
  expect(state).toEqual({display:'0.9',expression:['0.9','−'],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'7',expression:['7','÷'],overwrite:true}, {type:'calculator/handleButton',payload:'+'});
  expect(state).toEqual({display:'7',expression:['7','+'],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'0',expression:['0','×'],overwrite:true}, {type:'calculator/handleButton',payload:'6'});
  expect(state).toEqual({display:'6',expression:['0','×'],overwrite:false});
});
test('reducers', () => {
  let state;
  state = reducers({display:'0',expression:[],overwrite:false}, {type:'calculator/handleButton',payload:'8'});
  expect(state).toEqual({display:'8',expression:[],overwrite:false});
});
test('reducers', () => {
  let state;
  state = reducers({display:'2',expression:[],overwrite:false}, {type:'calculator/handleButton',payload:'+'});
  expect(state).toEqual({display:'2',expression:['2','+'],overwrite:true});
});
test('reducers', () => {
  let state;
  state = reducers({display:'2',expression:['0','×','5','×','2','−'],overwrite:true}, {type:'calculator/handleButton',payload:'='});
  expect(state).toEqual({display:'-2',expression:[],overwrite:true});
});