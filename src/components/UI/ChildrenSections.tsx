import React from "react";

const ChildrenSections = ({ children }) => {
  const items = React.Children.toArray(children.props.children)

  const firstSpan = items[0];
  console.log('items ', items);
  console.log('children', children);

  return (
    <div className="sectionWrapper">
      JUST WRAPPER
      <div>
        { children }
      </div>

      <div>
        first span: { firstSpan }
      </div>
    </div>
  )
}

export default ChildrenSections;