import React from "react";

function Heading({ title, type = "title", subtext }: HeadingProps) {
  return (
    <div>
      <h1 className="heading-lg flex items-center gap-1">
        {title}
        {type === "greeting" && <span className="text-blue-300">Chris</span>}
      </h1>
      <p className="mt-2">{subtext}</p>
    </div>
  );
}

export default Heading;
