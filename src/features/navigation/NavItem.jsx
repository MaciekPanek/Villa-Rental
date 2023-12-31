import { NavLink } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <li className='  text-xl md:text-2xl text-neutral-500 dark:text-neutral-300  w-full  '>
      <NavLink
        className='flex justify-center md:justify-start text-3xl md:text-2xl flex-row gap-3 py-2 md:pl-5 items-center '
        to={to}
        activeclassname='active'>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
