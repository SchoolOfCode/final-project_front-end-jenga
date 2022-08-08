import "./catergoryBar.css";
export default function CategoryBar({ parts, activeInfo, handleClick }) {
  return (
    <div className="categoryBar">
      {parts?.map((part, index) => (
        <div className="api-content">
          <button
            className="category-button"
            onClick={() => {
              handleClick(part);
            }}
            key={part.title}
          >
            {part.title}
          </button>
          <div
            className={`category-content ${
              index === activeInfo ? "active" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: part.body }}
          ></div>
        </div>
      ))}
    </div>
  );
}
