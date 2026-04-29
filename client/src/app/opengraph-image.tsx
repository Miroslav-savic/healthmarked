import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HealthMarked — Evidence-Based Health Information';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: '#059669',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
          }}
        >
          <span style={{ color: 'white', fontSize: 64, fontWeight: 'bold' }}>H</span>
        </div>
        <div style={{ fontSize: 64, fontWeight: 'bold', color: '#064e3b', marginBottom: 16, textAlign: 'center' }}>
          HealthMarked
        </div>
        <div style={{ fontSize: 28, color: '#065f46', textAlign: 'center', maxWidth: 800 }}>
          Evidence-Based Health Information
        </div>
        <div style={{ fontSize: 20, color: '#6b7280', marginTop: 24, textAlign: 'center' }}>
          Reviewed by board-certified physicians
        </div>
      </div>
    ),
    { ...size }
  );
}
