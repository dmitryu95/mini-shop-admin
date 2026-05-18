import TestName from "@/components/UI/TestComponents/TestName.tsx";

const TestCard = () => {
  return (
    <div className="TestCard">
      <h3>
        Test card
      </h3>
      <span>This is context test card</span>
      <TestName />
    </div>
  )
}

export default TestCard;