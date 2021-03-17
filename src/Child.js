import { useMemo, memo } from 'react';

// const Child = ({ onClick }) =>
//   useMemo(() => {
//     console.log('Child called');
//     return <button onClick={() => onClick((prev) => prev + 1)}>click me</button>;
//   }, [onClick]);

const Child = memo(function Child({ onClick }) {
  console.log('Child called');
  return <button onClick={() => onClick((prev) => prev + 1)}>click me</button>;
});

export default Child;
