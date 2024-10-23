"use client";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from '@/app/layout';
import { SearchPage } from '@/pages/searchPage';
import { TicketPage } from '@/pages/ticketPage/ticketPage';
import { Fallback } from '@/shared/ui/fallback';

export default function Page() {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="tickets" element={<TicketPage />} />
          <Route path="*" element={<Fallback />} /> {/* Обработка ошибок 404 */}
        </Routes>
      </BrowserRouter>
    </RootLayout>
  );
}
