import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  fontLoaded: boolean;
  smallLogo: string;
}

const baseLinks = [
    { 
        name: 'About', 
        path: '#',
        children: [
            { name: 'About Us', path: '/about' },
            { name: 'Mission', path: '/mission-statement'},
            { name: 'FAQ', path: '/faq' },
        ]
    },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
    { name: 'Join Us', path: '/join' }
]

const Header: React.FC<HeaderProps> = ({ fontLoaded, smallLogo }) => {
  const location = useLocation();
  const [openMenuId, setOpenMenuId] = React.useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-menu') && !target.closest('.dropdown-button')) {
            setOpenMenuId(null);
        }
      };

      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);

  const handleMenuClick = (menuId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === menuId ? null : menuId);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMenuId(null);
  }

  const getFilteredChildren = (children: Array<{ name: string; path: string }>) => {
    return children.filter(child => child.path !== location.pathname);
  }

  const headerLinks = [
    ...(location.pathname !== '/' ? [{ name: 'Home', path: '/' }, ] : []),
    ...baseLinks.map(link => {
        if (link.children) {
            return {
                ...link,
                children: getFilteredChildren(link.children)
            };
        }
        return link;
    })
  ];

    
  return (
    <header className="bg-[#4584b6] text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="https://pyversify.github.io/">
          <div className="flex items-center space-x-2">
            <img src={smallLogo} alt="PyVersify Logo" className="h-8 w-8" />
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Flux', sans-serif",
                visibility: fontLoaded ? 'visible' : 'hidden'
              }}
            >
              py versify
            </span>
          </div>
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#3a719b] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Regular Menu */}
          <div className="hidden md:flex space-x-8">
            {headerLinks.map((link, index) => (
              link.children ? (
                <div
                  key={index}
                  className="relative dropdown-menu"
                >
                  <button
                    onClick={(e) => handleMenuClick(link.name, e)}
                    className={`dropdown-button hover:text-[#ffde57] transition-colors flex items-center ${
                        link.children.some(child => child.path === location.pathname) ? 'text-[#ffde57]' : ''
                    }`}
                    aria-expanded={openMenuId === link.name}
                    aria-haspopup='true'
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform ${openMenuId === link.name ? 'rotate-180' : ''}`}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                </button>
                {openMenuId === link.name && link.children.length > 0 && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className='py-1' role='menu'>
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                        >
                          {child.name}
                        </Link> 
                      ))}
                    </div>
                  </div>
                )}
                </div>
              ) : link.path.startsWith('#') ? (
                <a
                  key={index}
                  href={link.path}
                  className="hover:text-[#ffde57] transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={index}
                  to={link.path}
                  className="hover:text-[#ffde57] transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } absolute top-full left-0 right-0 bg-[#4584b6] md:hidden shadow-lg`}
          >
            <div className="px-4 py-2">
              {location.pathname !== '/' && (
                <Link
                  to="/"
                  className="block py-2 px-4 text-white hover:text-[#ffde57] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              )}
              {baseLinks.map((link, index) => (
                <div key={index}>
                  {link.children ? (
                    <div className="relative">
                      <button
                        onClick={(e) => handleMenuClick(link.name, e)}
                        className="w-full flex items-center justify-between py-2 px-4 text-white hover:text-[#ffde57] transition-colors"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            openMenuId === link.name ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openMenuId === link.name && (
                        <div className="bg-[#3a719b] py-1">
                          {link.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.path}
                              className="block py-2 px-8 text-white hover:text-[#ffde57] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.path}
                      className="block py-2 px-4 text-white hover:text-[#ffde57] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
