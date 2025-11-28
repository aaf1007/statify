'use client';

import Image from 'next/image';

// Displays a single ranked item as a faux Win95 CD player with inline metadata.
export default function StatRow({
  rank,
  image,
  primaryLabel,
  primaryValue,
  secondaryLabel,
  secondaryValue,
  metaLabel,
  metaValue,
  progressValue,
  externalUrl,
}) {
  return (
    <li className="player-row">
      <div className="player-row__avatar">
        {image ? (
          <Image
            src={image}
            alt=""
            width={90}
            height={90}
            className="player-row__art"
            sizes="90px"
          />
        ) : (
          <div className="player-row__art player-row__art--fallback">♬</div>
        )}
        <span className="player-row__rank">#{rank}</span>
      </div>
      <div className="player-row__panel">
        <div className="player-row__fields">
          <div className="player-row__field">
            <span className="player-row__label">
              {primaryLabel || 'Artist'}:
            </span>
            <p className="player-row__value">{primaryValue || '—'}</p>
            <span className="player-row__dropdown" aria-hidden>
              ▾
            </span>
          </div>
          <div className="player-row__field">
            <span className="player-row__label">
              {secondaryLabel || 'Track'}:
            </span>
            <p className="player-row__value">{secondaryValue || '—'}</p>
            <span className="player-row__dropdown" aria-hidden>
              ▾
            </span>
          </div>
        </div>
        {metaLabel && (
          <p className="player-row__meta">
            {metaLabel}: <span>{metaValue || '—'}</span>
          </p>
        )}
        {typeof progressValue === 'number' && (
          <div className="player-row__slider" aria-label="Energy meter">
            <div
              className="player-row__slider-fill"
              style={{
                width: `${Math.min(Math.max(progressValue, 0), 100)}%`,
              }}
            />
          </div>
        )}
        <div className="player-row__controls">
          <button type="button" aria-label="Previous" disabled>
            ◄◄
          </button>
          <button type="button" aria-label="Rewind" disabled>
            ◄
          </button>
          <button type="button" aria-label="Play" disabled>
            ▶
          </button>
          <button type="button" aria-label="Stop" disabled>
            ■
          </button>
          <button type="button" aria-label="Record" disabled>
            ●
          </button>
          {externalUrl ? (
            <a
              href={externalUrl}
              target="_blank"
              rel="noreferrer"
              className="player-row__open"
            >
              ↗
            </a>
          ) : (
            <span className="player-row__open player-row__open--disabled">↗</span>
          )}
        </div>
      </div>
    </li>
  );
}
