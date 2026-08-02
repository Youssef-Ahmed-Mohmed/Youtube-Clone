import { useState } from "react";
import { FiMenu, FiSearch, FiMic, FiVideo, FiBell } from "react-icons/fi";
import "./Header.css";

interface HeaderProps {
  onToggleSidebar: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

function PlayLogo() {
  return (
    <svg width="90" height="20" viewBox="0 0 90 20" aria-hidden="true">
      <rect width="28" height="20" rx="6" fill="#FF0000" />
      <path d="M11 5.5 L20 10 L11 14.5 Z" fill="#fff" />
      <text
        x="34"
        y="15"
        fontFamily="'Roboto', Arial, sans-serif"
        fontSize="15"
        fontWeight={700}
        letterSpacing="-0.5"
        fill="var(--text-primary)"
      >
        YouTube
      </text>
    </svg>
  );
}

export default function Header({ onToggleSidebar, isDark, onToggleTheme }: HeaderProps) {
  const [query, setQuery] = useState("");

  return (
    <header className="app-header">
      <div className="header-left">
        <button className="icon-btn" aria-label="Toggle menu" onClick={onToggleSidebar}>
          <FiMenu size={20} />
        </button>
        <a className="logo" href="/" aria-label="YouTube home">
          <PlayLogo />
        </a>
      </div>

      <div className="header-center">
        <form className="search-form" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <FiSearch size={20} />
          </button>
        </form>
        <button className="icon-btn mic-btn" aria-label="Search with voice">
          <FiMic size={20} />
        </button>
      </div>

      <div className="header-right">
        <button className="icon-btn theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          {isDark ? "☀️" : "🌙"}
        </button>
        <button className="icon-btn" aria-label="Create">
          <FiVideo size={20} />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <FiBell size={20} />
          <span className="notif-dot" />
        </button>
        <button className="avatar-btn" aria-label="Account menu">
          <img src="https://i.pravatar.cc/64?img=12" alt="" />
        </button>
      </div>
    </header>
  );
}
