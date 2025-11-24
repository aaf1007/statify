'use client';

import Image from 'next/image';

// Shows the signed-in Spotify user's avatar and quick metadata with a sign-out button.
// Layout tweaks: wrap the section in your own container, swap the avatar/title stack, or move the logout button.
export default function ProfileCard({ profile, onLogout, followerLabel }) {
  return (
    <section className="card profile-card">
      <div className="profile">
        <ProfileAvatar profile={profile} />
        <div className="profile__details">
          <p className="muted">Logged in as</p>
          <h2>{profile?.display_name}</h2>
          <div className="profile__meta">
            <div>
              <p className="profile__meta-label">Email</p>
              <p className="profile__meta-value">{profile?.email || 'Hidden'}</p>
            </div>
            <div>
              <p className="profile__meta-label">Plan</p>
              <p className="profile__meta-badge">
                {profile?.product ? profile.product.toUpperCase() : 'N/A'}
              </p>
            </div>
            <div>
              <p className="profile__meta-label">Followers</p>
              <p className="profile__meta-value">{followerLabel}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="button button--ghost" onClick={onLogout}>
        Sign out
      </button>
    </section>
  );
}

function ProfileAvatar({ profile }) {
  const image = profile?.images?.[0]?.url;
  if (image) {
    return (
      <Image
        src={image}
        alt={profile?.display_name || 'Spotify user'}
        className="profile__avatar"
        width={80}
        height={80}
        sizes="80px"
      />
    );
  }

  const initial = profile?.display_name?.[0] || '?';
  return (
    <div className="profile__avatar profile__avatar--fallback">
      {initial.toUpperCase()}
    </div>
  );
}
