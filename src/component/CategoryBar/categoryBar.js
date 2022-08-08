import "./catergoryBar.css";
export default function CategoryBar({ parts, activeCategory, handleClick }) {
  return (
    <div className="categoryBar">
      {parts?.map((part) => (
        <button
          className={`category-btn ${part === activeCategory ? "active" : ""}`}
          onClick={() => {
            handleClick(part);
          }}
          key={part}
        >
          {part.title}
        </button>
      ))}
    </div>
  );
}
