import { useMemo, useState } from "react";
import CategoryPills from "../components/CategoryPills";
import VideoGrid from "../components/videogrid";
import { videos } from "../data/video";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return videos;
    return videos.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="home-page">
      <CategoryPills active={activeCategory} onSelect={setActiveCategory} />
      <VideoGrid videos={filtered} />
    </div>
  );
}
