import * as React from 'react'

type State<Values extends object> = {
  initialValues: Values
  status: 'ready' | 'pending'
}

type Action<Values extends object> = {
  type: 'RESOLVE_PROMISE_INITIAL_VALUES'
  payload: {
    initialValues: Values
  }
}

const reducer = <Values extends object>(
  state: State<Values>,
  { type, payload }: Action<Values>
): State<Values> => {
  switch (type) {
    case 'RESOLVE_PROMISE_INITIAL_VALUES': {
      return {
        status: 'ready',
        initialValues: payload.initialValues,
      }
    }
    default: {
      return state
    }
  }
}

export const useInitialValue = <Values extends object>(
  initialValues: Values,
  promiseInitialValues?: Promise<Values>
): [Values, State<Values>['status']] => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<Values>, Action<Values>>
  >(reducer, {
    status: promiseInitialValues ? 'pending' : 'ready',
    initialValues,
  })

  React.useEffect(() => {
    if (promiseInitialValues) {
      const resolveInitialValues = async () => {
        const initialValues = await promiseInitialValues

        return dispatch({
          type: 'RESOLVE_PROMISE_INITIAL_VALUES',
          payload: {
            initialValues,
          },
        })
      }

      void resolveInitialValues()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promiseInitialValues])

  return [state.initialValues, state.status]
}
