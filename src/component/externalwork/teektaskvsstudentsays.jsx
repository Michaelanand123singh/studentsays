import React from 'react';

export default function TeekTask() {
  // Function to copy referral code to clipboard
  const copyReferralCode = () => {
    const referralCode = "07YEG2E6DJ";
    navigator.clipboard.writeText(referralCode).then(() => {
      const confirmation = document.getElementById("copy-confirmation");
      confirmation.style.display = "block";
      setTimeout(() => {
        confirmation.style.display = "none";
      }, 2000); // Hide after 2 seconds
    });
  };

  return (
    <div style={{ backgroundColor: '#1d1f21', color: '#f2f2f2', minHeight: '100vh', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#292b2f', padding: '25px', borderRadius: '12px', textAlign: 'center', maxWidth: '600px', width: '100%', boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)' }}>
        
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <img src="/logo.png" alt="Student Says Logo" style={{ height: '40px', transition: 'transform 0.3s ease' }} />
          <div style={{ width: '2px', height: '40px', backgroundColor: '#f2f2f2' }}></div>
          <img src="/teeltask-logo.png" alt="TeekTask Logo" style={{ height: '40px', transition: 'transform 0.3s ease' }} />
        </div>

        {/* Heading and Description */}
        <h1 style={{ fontSize: '2em', color: '#ffcc00', marginBottom: '20px' }}><strong>Join TeekTask via Student Says</strong></h1>
        <p style={{ fontSize: '1.1em', margin: '10px 0', color: '#ddd' }}>
          Turn your free time into cash with <strong>TeekTask</strong>! Dive into simple tasks, collect rewards, and watch your pocket money grow. Say goodbye to empty wallets—use our referral code below, download the app, and start earning today!
        </p>

        {/* Referral Code Section */}
        <div
          onClick={copyReferralCode}
          style={{
            backgroundColor: '#333',
            padding: '10px',
            borderRadius: '8px',
            marginTop: '15px',
            fontSize: '1.2em',
            color: '#ffcc00',
            cursor: 'pointer',
            display: 'inline-block',
            position: 'relative',
          }}
        >
          Referral Code: <strong>Studentsays</strong>
          <span id="copy-confirmation" style={{ display: 'none', position: 'absolute', top: '-25px', right: '0', background: '#4caf50', color: '#fff', padding: '5px 10px', borderRadius: '5px', fontSize: '0.9em' }}>
            Copied!
          </span>
        </div>

        {/* CTA Button */}
        <a
          href="https://teektask.com/download?referral=07YEG2E6DJ"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#ffcc00',
            color: '#292b2f',
            fontWeight: 'bold',
            fontSize: '1.1em',
            borderRadius: '8px',
            marginTop: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
        >
          Download TeekTask Now
        </a>

        {/* Home Button */}
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#ffcc00',
            color: '#292b2f',
            fontWeight: 'bold',
            fontSize: '1.1em',
            borderRadius: '8px',
            marginTop: '20px',
            marginLeft: '10px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
        >
          Back to Home Screen
        </a>

        {/* App Images */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
          <a href="https://play.google.com/store/apps/details?id=com.app.teektask" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play Store" style={{ height: '50px', transition: 'transform 0.3s ease' }} />
          </a>
          <a href="https://apps.apple.com/us/app/teektask/id123456789" target="_blank" rel="noopener noreferrer">
            <img src="/applestore.png" alt="Apple App Store" style={{ height: '50px', transition: 'transform 0.3s ease' }} />
          </a>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: '30px', fontSize: '0.9em', color: '#666' }}>
          Powered by <strong>Student Says</strong> in collaboration with <strong>TeekTask</strong>.
        </footer>
      </div>
    </div>
  );
}
