import "./catergoryBar.css";
export default function CategoryBar({ parts, activeCategory, handleToggle }) {
  return (
    <div className="categoryBar">
      {parts?.map((part) => (
        <button
          className={`category-btn ${part === activeCategory ? "active" : ""}`}
          onClick={() => {
            handleToggle(part);
          }}
          key={part}
        >
          {part.title}
        </button>
      ))}
    </div>
  );
}
