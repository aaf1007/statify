'use client';

// Renders a card full of stat rows (tracks, artists, or recently played).
// Layout tweaks: change the wrapper className, add a header toolbar, or replace <ul> with your own grid.
export default function StatsList({ title, items, renderItem, iconLabel }) {
  return (
    <article className="retro-window stats-window">
      <div className="retro-titlebar">
        <span>{title}</span>
        <div className="stats-window__badge" aria-hidden>
          {iconLabel || 'IO'}
        </div>
      </div>
      <div className="stats-window__body">
        <ul className="retro-list">
          {items?.length ? (
            items.map((item, index) => renderItem(item, index))
          ) : (
            <li className="retro-list__empty">No data yet.</li>
          )}
        </ul>
      </div>
    </article>
  );
}
