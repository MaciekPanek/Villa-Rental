import { useState } from 'react';
import Guest from '../features/guests/Guest';
import { useBookings } from '../hooks/useBookings';
import Loader from '../ui/Loader';

function Guests() {
  const { isLoading, error, bookings: guests } = useBookings();
  const [searchedGuest, setSearchedGuest] = useState(''); // State for the search input

  if (!guests || isLoading) return <Loader />;

  // Filter guests based on the search input
  const filteredGuests = guests.filter((guest) =>
    guest.Guests.fullName.toLowerCase().includes(searchedGuest.toLowerCase())
  );

  return (
    <section className='bg-stone-100 dark:bg-dark-600 min-h-screen p-10'>
      <div className='flex justify-center'>
        <input
          value={searchedGuest}
          onChange={(e) => setSearchedGuest(e.target.value)}
          placeholder='Search for guest'
          className='md:w-3/5 w-4/5 bg-neutral-200 dark:bg-neutral-500 rounded-full px-5 py-2 mb-10 focus:outline-none text-neutral-600 dark:text-neutral-300 dark:placeholder:text-neutral-300 '
        />
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {filteredGuests.map((guest) => (
          <Guest key={guest.id} guest={guest} />
        ))}
      </div>
    </section>
  );
}

export default Guests;
