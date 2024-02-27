import { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils'

function reducer(state, action) {
    // if (action.type === 'inc') return currentState + 1
    // if (action.type === 'dec') return currentState - 1
    // if (action.type === 'set') return action.payload
    console.log(state, action)

    switch(action.type) {
        case 'dec': ...
    }


    return { count: 0, step: 1 }
}

export default function DateCounter() {
    const initialState = { count: 0, step: 1 }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { count, step } = state

    const date = new Date()
    date.setDate(date.getDate() + count)

    const dec = function () {
        dispatch({ type: 'dec' })
    }

    const inc = function () {
        dispatch({ type: 'inc' })
    }

    const defineCount = function (e) {
        dispatch({ type: 'set', payload: Number(e.target.value) })
    }

    const defineStep = function (e) {
        // setStep(Number(e.target.value))
    }

    const reset = function () {
        // setCount(0)
        // setStep(1)
    }

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
