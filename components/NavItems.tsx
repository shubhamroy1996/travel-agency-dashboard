import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'


const NavItems = () => {

  const user = {
    name: 'Shubham',
    email: 'shubham.roy1996.sr@gmail.com',
    imageUrl: '/assets/images/david.webp'
  }

  return (
    <section className='nav-items'>
      <Link to="/" className='link-logo'>
        <img src='/assets/icons/logo.svg' alt='logo' className='size-7.5'/>
        <h1>Tourvisto</h1>
      </Link>

      <div className='container'>
        <nav>
          {sidebarItems.map(({id, href, icon,label}) => (
           <NavLink to={href} key={id}>
            {({isActive}: {isActive: Boolean}) => (
              <div className={cn('group nav-item', {'bg-primary-100 !text-white': isActive})}>
                <img 
                  src={icon}
                  alt={label}
                  className={`group-hover: brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert': 'text-dark-200'}`}
                />
                {label}
              </div>

            )}

           </NavLink>

          ))}
        </nav>
      </div>

      <footer className='nav-footer'>
        <img src={user?.imageUrl || '/assets/images/david.webp'} alt={user?.name || 'shubham'}/>

        <article>
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </article>

        <button onClick={()=> {
          console.log("logout")
        }} className='curson-pointer'><img src='/assets/icons/logout.svg' alt='logout' className='size-6' /></button>

      </footer>

    </section>
  )
}

export default NavItems
