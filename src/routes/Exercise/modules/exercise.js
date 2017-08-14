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

export function moveNemo (e) {
  return {
    type    : MOVE_NEMO,
    payload : e.keyCode
  }
}

export const actions = {
  increment,
  doubleAsync,
  moveNemo
}

// ------------------------------------
// Action Handlers and Helpers
// ------------------------------------

const testCollision = (newState) => {
  const circle1 = {radius: 50, x: newState.x, y: newState.y}
  const circle2 = {radius: 50, x: 200, y: 0}

  const dx = circle1.x - circle2.x
  const dy = circle1.y - circle2.y
  const distance = Math.sqrt(dx * dx + dy * dy)

  return distance < circle1.radius + circle2.radius ? true : false
}


const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [MOVE_NEMO]            : (state, action) => {
    const newState = { ...state }
    switch (action.payload) {
      case 37: // subtract from x-axis
        newState.x -= 5
        break
      case 39: // add to x-axis
        newState.x += 5
        break
      case 38: // subtract from  y-axis
        newState.y -= 5
        break
      case 40: // add to y-axis
        newState.y += 5
        break
    }
    newState.hasCollided = testCollision(newState)
    return newState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { x: 0, y: 0, hasCollided: false }
export default function exerciseReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
