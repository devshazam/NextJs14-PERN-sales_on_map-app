import React from 'react';
import type { Metadata } from 'next'
import SessionWrapper from '@/components/providers/SessionWrapper'
import { AntdRegistry } from '@ant-design/nextjs-registry';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <SessionWrapper>
      <html lang="en">
        <body className={`antialiased`}>
          <AntdRegistry> 
            {children}
          </AntdRegistry> 
        </body>
      </html>
    </SessionWrapper>
  );
}










