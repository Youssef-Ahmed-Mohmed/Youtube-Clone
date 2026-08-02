import type { ComponentType } from "react";
import {
  FiHome,
  FiCompass,
  FiFilm,
  FiClock,
  FiThumbsUp,
  FiFolder,
  FiTrendingUp,
  FiShoppingBag,
  FiMusic,
  FiTv,
  FiSettings,
  FiFlag,
  FiHelpCircle,
} from "react-icons/fi";
import "./sidebar.css";

interface SidebarProps {
  isOpen: boolean;
}

const primaryLinks = [
  { icon: FiHome, label: "Home", active: true },
  { icon: FiCompass, label: "Explore" },
  { icon: FiFilm, label: "Subscriptions" },
];

const libraryLinks = [
  { icon: FiClock, label: "History" },
  { icon: FiFolder, label: "Playlists" },
  { icon: FiThumbsUp, label: "Liked videos" },
];

const exploreLinks = [
  { icon: FiTrendingUp, label: "Trending" },
  { icon: FiShoppingBag, label: "Shopping" },
  { icon: FiMusic, label: "Music" },
  { icon: FiTv, label: "Live" },
];

const subscriptions = [
  { name: "Joo Codes", img: 33 },
  { name: "React Daily", img: 44 },
  { name: "Neural Notes", img: 15 },
  { name: "Studio Ink", img: 26 },
  { name: "Boss Rush", img: 8 },
];

function Section({
  items,
}: {
  items: { icon: ComponentType<{ size?: number }>; label: string; active?: boolean }[];
}) {
  return (
    <ul className="sidebar-section">
      {items.map(({ icon: Icon, label, active }) => (
        <li key={label}>
          <button className={`sidebar-link${active ? " active" : ""}`}>
            <Icon size={20} />
            <span>{label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar${isOpen ? "" : " collapsed"}`}>
      <div className="sidebar-inner">
        <Section items={primaryLinks} />
        <div className="sidebar-divider" />
        <Section items={libraryLinks} />
        <div className="sidebar-divider" />

        <p className="sidebar-heading">Subscriptions</p>
        <ul className="sidebar-section">
          {subscriptions.map((s) => (
            <li key={s.name}>
              <button className="sidebar-link">
                <img className="sidebar-avatar" src={`https://i.pravatar.cc/40?img=${s.img}`} alt="" />
                <span>{s.name}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="sidebar-divider" />

        <p className="sidebar-heading">Explore</p>
        <Section items={exploreLinks} />
        <div className="sidebar-divider" />

        <ul className="sidebar-section">
          <li>
            <button className="sidebar-link">
              <FiSettings size={20} />
              <span>Settings</span>
            </button>
          </li>
          <li>
            <button className="sidebar-link">
              <FiFlag size={20} />
              <span>Report history</span>
            </button>
          </li>
          <li>
            <button className="sidebar-link">
              <FiHelpCircle size={20} />
              <span>Help</span>
            </button>
          </li>
        </ul>

        <p className="sidebar-footer">© 2026 YouTube Clone — for learning purposes</p>
      </div>
    </aside>
  );
}
