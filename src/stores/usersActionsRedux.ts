export const fetchUsers = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: 'users/loading' })

      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const result = await response.json()

      dispatch({
        type: 'users/success',
        payload: result,
      })
    } catch (e) {
      dispatch({
        type: 'users/error',
        payload: 'error',
      })
    }
  }
}