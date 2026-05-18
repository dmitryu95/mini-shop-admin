import {testMobxStore} from "@/stores/testMobxStore.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

const TestMobXPage = observer(() => {
  useEffect(() => {
   void testMobxStore.fetchUsername()
  }, [])

  if (testMobxStore.error) {
    return <div>Error: " + testMobxStore.error.message + "</div>;
  }

  return (
    <div className="test-page">
      <h1>TEST PAGE MOBX</h1>
      <div className="MOBX">
        {testMobxStore.users.map((user) => {
          return (
            <div key={user.id}>
              {user.name}
            </div>
          )
        })}
      </div>
      <h4>emails (computed)</h4>

      {/*COMPUTED*/}
      <ul>
        {testMobxStore.emailsList.map((email) => (
          <li key={email}>
            {email}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default TestMobXPage;