import { categories } from "../data/video";
import "./CategoryPills.css";

interface CategoryPillsProps {
  active: string;
  onSelect: (id: string) => void;
}

export default function CategoryPills({ active, onSelect }: CategoryPillsProps) {
  return (
    <div className="category-pills" role="tablist" aria-label="Video categories">
      {categories.map((c) => (
        <button
          key={c.id}
          role="tab"
          aria-selected={active === c.id}
          className={`pill${active === c.id ? " pill-active" : ""}`}
          onClick={() => onSelect(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
