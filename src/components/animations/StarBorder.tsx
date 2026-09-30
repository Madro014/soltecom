import React from 'react';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  speed?: string;
}

export default function StarBorder({
  children,
  className = '',
  color = '#00f0ff',
  speed = '6s',
}: StarBorderProps) {
  return (
    <div className={`relative inline-block overflow-hidden rounded-[20px] p-[1px] ${className}`}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
          animation: `spin ${speed} linear infinite`,
        }}
      />
      <div className="relative z-10 h-full w-full rounded-[19px] bg-white dark:bg-surface-dark p-6">
        {children}
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
