import {useContext} from "react";
import {TestContext} from "@/contexts/TestContext.tsx";

const TestName = () => {
  const data = useContext(TestContext)

  console.log("data: ", data.results[0].name.first)
  return (
    <div className="TestName">
      <h3>
        TestName
      </h3>
      <span> This is context api span Name</span>
      <h4>name (context): { data.results[0].name.first }</h4>
    </div>
  )
}

export default TestName;