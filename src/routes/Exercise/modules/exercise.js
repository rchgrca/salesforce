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
  e.preventDefault()
  return {
    type    : MOVE_NEMO,
    payload : e
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

const testCollision = (newState, e) => {
  const doryX = e.srcElement.getElementsByClassName('dori')[0].offsetLeft
  const doryY = e.srcElement.getElementsByClassName('dori')[0].offsetTop
  var rect1 = {x: newState.x, y: newState.y, width: 150, height: 107}
  var rect2 = {x: doryX, y: doryY, width: 150, height: 107}

  if (rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y) {
       return true
  }
  return false
}

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [MOVE_NEMO]            : (state, action) => {
    const newState = { ...state }
    switch (action.payload.keyCode) {
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
    newState.hasCollided = testCollision(newState, action.payload)
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
