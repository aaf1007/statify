'use client';

import Image from 'next/image';

// Displays a single ranked item as a Y2K CD case with inline detail on hover.
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
    <li className="cd">
      <div className="cd__case">
        <div className="cd__sticker">#{rank}</div>
        {image ? (
          <Image
            src={image}
            alt=""
            width={96}
            height={96}
            className="cd__art"
            sizes="96px"
          />
        ) : (
          <div className="cd__art cd__art--fallback">CD</div>
        )}
        <div className="cd__shine" />
        <div className="cd__glare" />
      </div>
      <div className="cd__info">
        <div className="cd__title-row">
          <a
            href={externalUrl || '#'}
            target={externalUrl ? '_blank' : undefined}
            rel={externalUrl ? 'noreferrer' : undefined}
            className="cd__title"
            aria-disabled={!externalUrl}
          >
            {title}
          </a>
          {metricValue && (
            <span className="cd__pill">
              {metricLabel ? `${metricLabel}: ` : ''}
              {metricValue}
            </span>
          )}
        </div>
        <p className="cd__subtitle">{subtitle}</p>
        <div className="cd__liner">
          <span className="cd__liner-label">Details</span>
          <p className="cd__liner-copy">
            {metricLabel && metricValue
              ? `${metricLabel}: ${metricValue} • `
              : ''}
            {externalUrl ? 'Open in Spotify' : 'Spotify link unavailable'}
          </p>
        </div>
      </div>
    </li>
  );
}
