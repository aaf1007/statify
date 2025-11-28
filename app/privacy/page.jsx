'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="app retro-shell">
      <div className="legal-page">
        <Link href="/" className="legal-page__back">
          <ArrowLeft size={18} />
          Back to Statify
        </Link>

        <article className="retro-window legal-content">
          <div className="retro-titlebar">
            <span>Privacy Policy</span>
            <div className="retro-titlebar__actions">
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>
          <h1>Privacy Policy</h1>
          <p className="legal-content__updated">Last updated: November 2024</p>

          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to Statify. We respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we handle your information when you use our service to view
              your Spotify listening statistics.
            </p>
          </section>

          <section>
            <h2>What Data We Access</h2>
            <p>When you connect your Spotify account, we request access to:</p>
            <ul>
              <li><strong>Profile Information:</strong> Your display name, email, profile picture, and follower count</li>
              <li><strong>Top Items:</strong> Your top artists and tracks over various time periods</li>
              <li><strong>Recently Played:</strong> Your listening history</li>
              <li><strong>Playlist Access:</strong> Ability to create playlists on your behalf (only when you choose to save your top tracks)</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Data</h2>
            <p>Your Spotify data is used exclusively to:</p>
            <ul>
              <li>Display your listening statistics and insights</li>
              <li>Show your top artists, tracks, and recently played songs</li>
              <li>Create playlists from your top tracks (only when you explicitly request it)</li>
            </ul>
            <p>
              <strong>We do not sell, share, or transfer your data to any third parties.</strong>
            </p>
          </section>

          <section>
            <h2>Data Storage</h2>
            <p>
              Statify operates entirely in your browser. Your Spotify authentication tokens are stored
              locally in your browser&rsquo;s storage and are never sent to our servers.
            </p>
            <ul>
              <li><strong>No Server Storage:</strong> We do not store your Spotify data on any external servers</li>
              <li><strong>Local Only:</strong> All data remains in your browser session</li>
              <li><strong>You&rsquo;re in Control:</strong> Signing out clears all stored data from your browser</li>
            </ul>
          </section>

          <section>
            <h2>Third-Party Services</h2>
            <p>
              Statify uses the Spotify Web API to access your listening data. When you connect your account,
              you are subject to <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Spotify&rsquo;s Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Disconnect:</strong> Revoke Statify&rsquo;s access to your Spotify account at any time through your <a href="https://www.spotify.com/account/apps/" target="_blank" rel="noopener noreferrer">Spotify account settings</a></li>
              <li><strong>Clear Data:</strong> Sign out of Statify to remove all locally stored data</li>
              <li><strong>Access:</strong> All your data is visible directly in the app - we have no hidden data collection</li>
            </ul>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              Statify does not use cookies for tracking or advertising. We only use browser local storage
              to maintain your authentication session.
            </p>
          </section>

          <section>
            <h2>Children&rsquo;s Privacy</h2>
            <p>
              Statify is not intended for children under 13. We do not knowingly collect personal information
              from children under 13.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by
              posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our practices, please contact us at:{' '}
              <a href="mailto:privacy@statify-stats.vercel.app">privacy@statify-stats.vercel.app</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
