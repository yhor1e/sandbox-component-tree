import { memo } from 'react';

const Child2 = memo((props) => {
  console.log('Child2 called');
  return <button onClick={() => props.dispatch({ type: 'increment' })}>click me</button>;
});
export default Child2;
