// app/admin/layout.tsx
import React from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Admin Header</header>
      <main>{children}</main>
      <footer>Admin Footer</footer>
    </div>
  );
}