import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import RootLayout from '@/app/layout';
import { SearchPage } from '@/pages/searchPage';
import { TicketPage } from '@/pages/ticketPage/ticketPage';
import { Fallback } from '@/shared/ui/fallback'; // Страница для 404 ошибок

export const AppRouter = () => {

    const routers = createRoutesFromElements(
        <Route
            path='/'
            element={<RootLayout />}
            errorElement={<Fallback />}  
        >
            <Route index element={<SearchPage />} /> 
            <Route path='tickets' element={<TicketPage />} /> 
        </Route>
    );

    const router = createHashRouter(routers);

    return <RouterProvider router={router} />;
};
