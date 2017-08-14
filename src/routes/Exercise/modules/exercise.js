// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const MOVE_NEMO = 'MOVE_NEMO'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

export function moveNemo (e, x = 0, y = 0) {
  switch(e.keyCode){
    case 37: // subtract from x-axis
      x = x - 5
      break;
    case 39: // add to x-axis
      x = x + 5
      break;
    case 38: // add to y-axis
      y = y + 5
      break;
    case 40: // subtract from y-axis
      y = y - 5
      break;
  }
  return {
    type    : MOVE_NEMO,
    payload : {x,y}
  }
}

export const actions = {
  increment,
  doubleAsync,
  moveNemo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [MOVE_NEMO]            : (state, action) => {
    console.log(state, action.payload)
    return state + action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
