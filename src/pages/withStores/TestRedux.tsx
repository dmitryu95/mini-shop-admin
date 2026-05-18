import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from "@/stores/usersActionsRedux.ts";

const TestReduxPage = () => {
  const dispatch = useDispatch()

  // данные переменные из стора (state)
  const users = useSelector((state: any) => state.users)
  const isLoading = useSelector((state: any) => state.isLoading)
  const error = useSelector((state: any) => state.error)

  // computed аналог
  const emailsList = users.map((user: any) => user.email)

  useEffect(() => {
    dispatch(fetchUsers() as any)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="test-page">
      <h1>TEST PAGE Redux</h1>

      <div className="REDUX">
        {users.map((user: any) => {
          return (
            <div key={user.id}>
              {user.name}
            </div>
          )
        })}
      </div>

      <h4>emails (computed аналог)</h4>

      <ul>
        {emailsList.map((email: string) => (
          <li key={email}>
            {email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestReduxPage