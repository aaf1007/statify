'use client';

import Image from 'next/image';

// Displays a single ranked item with artwork, title, subtitle, and an optional metric.
// Layout tweaks: adjust the grid by changing classNames, or swap the metric block to the left/right as needed.
export default function StatRow({
  rank,
  image,
  title,
  subtitle,
  metricLabel,
  metricValue,
  externalUrl,
}) {
  return (
    <li className="entity">
      <span className="entity__rank">{rank}</span>
      {image && (
        <Image
          src={image}
          alt=""
          width={56}
          height={56}
          className="entity__thumb"
          sizes="56px"
        />
      )}
      <div className="entity__meta">
        <a
          href={externalUrl || '#'}
          target={externalUrl ? '_blank' : undefined}
          rel={externalUrl ? 'noreferrer' : undefined}
          className="entity__title"
          aria-disabled={!externalUrl}
        >
          {title}
        </a>
        <p className="entity__subtitle">{subtitle}</p>
      </div>
      <div className="entity__metric">
        <span>{metricLabel}</span>
        <strong>{metricValue}</strong>
      </div>
    </li>
  );
}
