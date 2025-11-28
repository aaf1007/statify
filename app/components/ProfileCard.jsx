'use client';

import Image from 'next/image';

// Shows the signed-in Spotify user's avatar and quick metadata with a sign-out button.
// Layout tweaks: wrap the section in your own container, swap the avatar/title stack, or move the logout button.
export default function ProfileCard({ profile, onLogout, followerLabel }) {
  return (
    <section className="retro-window profile-card">
      <div className="retro-titlebar">
        <span>User properties</span>
        <div className="retro-titlebar__actions">
          <span>_</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>
      <div className="profile">
        <ProfileAvatar profile={profile} />
        <div className="profile__details">
          <p className="muted">Signed in as</p>
          <h2>{profile?.display_name}</h2>
          <div className="profile__meta">
            <label>
              Email
              <span>{profile?.email || 'Hidden'}</span>
            </label>
            <label>
              Plan
              <span>{profile?.product ? profile.product.toUpperCase() : 'N/A'}</span>
            </label>
            <label>
              Followers
              <span>{followerLabel}</span>
            </label>
          </div>
        </div>
      </div>
      <div className="profile__actions">
        <button
          className="retro-button retro-button--ghost"
          onClick={onLogout}
          type="button"
        >
          Sign out
        </button>
      </div>
    </section>
  );
}

function ProfileAvatar({ profile }) {
  const image = profile?.images?.[0]?.url;
  const initial = profile?.display_name?.[0] || '?';

  if (image) {
    return (
      <div className="profile__avatar-frame">
        <Image
          src={image}
          alt={profile?.display_name || 'Spotify user'}
          className="profile__avatar"
          width={80}
          height={80}
          sizes="80px"
        />
      </div>
    );
  }

  return (
    <div className="profile__avatar-frame">
      <div className="profile__avatar profile__avatar--fallback">
        {initial.toUpperCase()}
      </div>
    </div>
  );
}
