import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      style={{
        position: 'fixed',
        top: '1rem',
        left: '8rem',
        zIndex: 9999,
        border: 'none',
        background: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 42,
          height: 42,
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 0.5,
          backgroundColor: isDark ? '#ffffff' : '#2a2a3d',
          color: isDark ? '#1f2937' : '#f1f5f9',
          boxShadow: !isDark
            ? '0 4px 14px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)'
            : '0 6px 18px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.06)',
          userSelect: 'none',
        }}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
}

export default LanguageToggle;
