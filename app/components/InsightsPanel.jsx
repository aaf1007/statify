'use client';

// Displays qualitative insights and lightweight progress indicators.
export default function InsightsPanel({ insights = [], loading }) {
  if (!insights.length) return null;

  return (
    <section className="retro-window insights-panel">
      <div className="retro-titlebar">
        <span>Insights</span>
        <span className={`status-chip ${loading ? 'is-syncing' : 'is-online'}`}>
          {loading ? 'Refreshing' : 'Live'}
        </span>
      </div>
      <ul className="insights-panel__list">
        {insights.map((insight) => (
          <li key={insight.title} className="insight">
            <h4>{insight.title}</h4>
            <p>{insight.description}</p>
            {typeof insight.progress === 'number' && (
              <div className="insight__progress">
                <span
                  style={{
                    width: `${Math.min(Math.max(insight.progress, 0), 100)}%`,
                  }}
                />
              </div>
            )}
            {insight.meta && <p className="insight__meta">{insight.meta}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
