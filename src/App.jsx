import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { VillaDetailsProvider } from './context/VillaDetailsContext';
import AppLayout from './AppLayout';
import Dashboard from './pages/Dashboard';
import Error from './ui/Error';
import Bookings from './pages/Bookings';
import Guests from './pages/Guests';
import Villas from './pages/Villas';
import Settings from './pages/Settings';
import AddNewVilla from './features/villas/AddNewVilla';
import VillaDetails from './features/villas/VillaDetails';
import RegisterGuest from './features/bookings/RegisterGuest';
import NewBooking from './features/bookings/NewBooking';
import { DarkModeProvider } from './context/DarkModeContext';
import Login from './pages/Login';
import ProtectedRoute from './ui/ProtectedRoute';
import { VillaProvider } from './context/VillaContext';

const router = createBrowserRouter([
  {
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/villas',
        element: <Villas />,
      },
      {
        path: '/villas/:villaId',
        element: <VillaDetails />,
      },
      {
        path: '/villas/newvilla',
        element: <AddNewVilla />,
      },
      {
        path: '/guests',
        element: <Guests />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/bookings/newbooking/:villaName',
        element: <RegisterGuest />,
      },
      {
        path: '/bookings/newbooking/:villaName/:guestId',
        element: <NewBooking />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
// const queryClient = new QueryClient();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 6000,
    },
  },
});

export default function App() {
  return (
    <VillaDetailsProvider>
      <VillaProvider>
        <DarkModeProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Toaster
              position='bottom-left'
              gutter={12}
              containerStyle={{ margin: '8px' }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: '20px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: '#e7e5e4',
                  color: '#525252',
                },
              }}
            />
          </QueryClientProvider>
        </DarkModeProvider>
      </VillaProvider>
    </VillaDetailsProvider>
  );
}
