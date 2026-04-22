import { useState } from "react";

export default function ReadMore({ text }) {
  const [expanded, setExpanded] = useState(false);

  const limit = 120;
  const isLong = text.length > limit;

  const displayText = expanded || !isLong
    ? text
    : text.slice(0, limit) + "...";

  return (
    <p className="text-sm md:w-[800px] break-all">
      {displayText}

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-2 text-blue-500 hover:underline"
        >
          {expanded ? "View less" : "View more"}
        </button>
      )}
    </p>
  );
}