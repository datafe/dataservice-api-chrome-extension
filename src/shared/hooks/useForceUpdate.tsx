import React, { useReducer } from 'react';

function useForceUpdate() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  return forceUpdate;
};

export default useForceUpdate;