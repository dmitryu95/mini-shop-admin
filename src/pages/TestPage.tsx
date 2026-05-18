import useTestPage from "@/hooks/useTestPage.tsx";
import TestModule from "@/components/UI/TestComponents/TestModule.tsx";
import { TestContext } from "@/contexts/TestContext.tsx";
import React from "react";

const TestPage = () => {
  const { data, error, isLoading } = useTestPage();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=> {
    e.preventDefault();
  }


  return (
    !isLoading && (
      <div className="test-page">
        <h1>TEST PAGE</h1>
        <span>This is context api block</span>
        <div className="contestApi">
          <TestContext.Provider value={data}>
            <TestModule/>
          </TestContext.Provider>
        </div>
        <span>DIFFEREN TYPES INPUT AND EVENTS</span>
        <button onClick={handleClick}>handleClick</button>
        <input onChange={handleChange} />
        <form onSubmit={handleSubmit}></form>
      </div>
    )
  )
}

export default TestPage;