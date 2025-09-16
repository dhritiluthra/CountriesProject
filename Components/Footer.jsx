import React from 'react'
import useTheme from '../hooks/useTheme';

export default function Footer() {
  [isDark] = useTheme();
  return (
    <footer className={`footer ${isDark ? "dark-mode" : ""}`}>
      <div>© 2025 My Website. All rights reserved.</div>
      <div>
        <a href="/about">About Us</a> | 
        <a href="/contact">Contact</a> | 
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="social-icons">
        <span>🔗 Facebook</span>
        <span>🐦 Twitter</span>
        <span>📸 Instagram</span>
      </div>
    </footer>
  );
}

