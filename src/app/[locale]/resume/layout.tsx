'use client';

import React from 'react';
import { notFound } from 'next/navigation';

const locales = ['en', 'zh'];

export default function Layout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '60px', 
        background: '#121212', 
        zIndex: 9999 
      }} />
      <div style={{ margin: 0, padding: 0, background: '#121212' }}>
        {children}
      </div>
    </>
  );
} 