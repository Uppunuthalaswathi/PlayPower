function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#listing" aria-label="Airbnb home">
          <svg aria-hidden="true" viewBox="0 0 32 32">
            <path d="M16 3.8c-2.9 0-4.7 3.7-7.2 8.8C6.5 17.3 4 21 4 24.2A5.8 5.8 0 0 0 9.8 30c2.4 0 4.5-1.5 6.2-4.1 1.7 2.6 3.8 4.1 6.2 4.1a5.8 5.8 0 0 0 5.8-5.8c0-3.2-2.5-6.9-4.8-11.6C20.7 7.5 18.9 3.8 16 3.8Zm0 6.5c1.3 2.4 2.4 5 3.6 7.3 1.1 2.2 2.1 4.2 2.1 5.3a2.5 2.5 0 1 1-5 0c0-1.6.5-3.8 1.1-5.9h-3.6c.6 2.1 1.1 4.3 1.1 5.9a2.5 2.5 0 1 1-5 0c0-1.1 1-3.1 2.1-5.3 1.2-2.3 2.3-4.9 3.6-7.3Z" />
          </svg>
          <span>airbnb</span>
        </a>
        <div className="search-bar" role="search" aria-label="Search stays">
          <button type="button"><span aria-hidden="true">🏡</span><strong>Anywhere</strong></button>
          <span className="search-divider" />
          <button type="button"><strong>Anytime</strong></button>
          <span className="search-divider" />
          <button className="guest-search" type="button">Add guests</button>
          <button className="search-submit" type="button" aria-label="Search">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
          </button>
        </div>
        <nav className="header-nav" aria-label="User navigation">
          <button className="host-button" type="button">Become a host</button>
          <button className="round-button" type="button" aria-label="Choose a language">
            <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5S14.2 18.2 12 20.5C9.8 18.2 8.6 15.4 8.6 12S9.8 5.8 12 3.5Z" /></svg>
          </button>
          <button className="round-button menu-button" type="button" aria-label="Open account menu">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
