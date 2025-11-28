'use client';

// Renders KPI tiles that summarize the fetched Spotify stats.
export default function MetricHighlights({ metrics = [] }) {
  if (!metrics.length) return null;

  return (
    <section className="retro-window metric-grid">
      <div className="retro-titlebar">
        <span>Highlights</span>
        <div className="stats-window__badge" aria-hidden>
          KPIs
        </div>
      </div>
      <div className="metric-grid__items">
        {metrics.map((metric) => (
          <article key={metric.key} className="metric-tile">
            <div className="metric-tile__icon" aria-hidden>
              <span>{metric.icon || 'KP'}</span>
            </div>
            <div>
              <p className="metric-tile__label">{metric.label}</p>
              <p className="metric-tile__value">{metric.value}</p>
              {metric.meta && (
                <p className="metric-tile__meta">{metric.meta}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
