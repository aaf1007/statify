'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="app retro-shell">
      <div className="legal-page">
        <Link href="/" className="legal-page__back">
          <ArrowLeft size={18} />
          Back to Statify
        </Link>

        <article className="retro-window legal-content">
          <div className="retro-titlebar">
            <span>Terms of Service</span>
            <div className="retro-titlebar__actions">
              <span>_</span>
              <span>□</span>
              <span>×</span>
            </div>
          </div>
          <h1>Terms of Service</h1>
          <p className="legal-content__updated">Last updated: November 2024</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Statify, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              Statify is a web application that allows you to view your Spotify listening statistics,
              including your top artists, top tracks, and recently played songs. The service also allows
              you to create playlists from your top tracks.
            </p>
          </section>

          <section>
            <h2>3. Spotify Account Required</h2>
            <p>
              To use Statify, you must have a valid Spotify account. By connecting your Spotify account,
              you authorize us to access your Spotify data as described in our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to reverse engineer, hack, or disrupt the service</li>
              <li>Not use the service to violate Spotify&rsquo;s Terms of Service</li>
              <li>Be responsible for maintaining the security of your Spotify account</li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The Statify name, logo, and design are our property. Spotify, the Spotify logo, and all
              related trademarks are the property of Spotify AB. Album artwork and artist images are
              the property of their respective owners.
            </p>
          </section>

          <section>
            <h2>6. Data and Privacy</h2>
            <p>
              Your use of Statify is also governed by our <Link href="/privacy">Privacy Policy</Link>.
              We process your Spotify data only to provide the service and do not store it on external servers.
            </p>
          </section>

          <section>
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              Statify is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not guarantee that the service will be uninterrupted, secure,
              or error-free.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your use of or inability to use
              the service.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Services</h2>
            <p>
              Statify relies on the Spotify Web API. We are not responsible for any changes, outages,
              or issues with Spotify&rsquo;s service that may affect Statify&rsquo;s functionality.
            </p>
          </section>

          <section>
            <h2>10. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue Statify at any time without notice.
              We may also update these Terms of Service, and continued use of the service constitutes
              acceptance of any changes.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              You may stop using Statify at any time by signing out and revoking access through your
              Spotify account settings. We may also terminate or suspend your access if you violate
              these terms.
            </p>
          </section>

          <section>
            <h2>12. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@statify-stats.vercel.app">support@statify-stats.vercel.app</a>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
