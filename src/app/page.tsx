"use client";

import RootLayout from '@/app/layout';
import SearchPage from '@/pages/searchPage';
import TicketPage from '@/pages/ticketPage';

export default function Page() {
  return (
    <RootLayout>
      <SearchPage />
      <TicketPage />
    </RootLayout>
  );
}
