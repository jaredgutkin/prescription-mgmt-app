import {FaPills} from 'react-icons/fa'

export default function Header() {
    return (
      <nav className="navbar bg-light mb-4 p-0">
          <div className="container">
              <a href="/" className="navbar-brand">
                  <div className="d-flex">
                      <FaPills className="mr-2" />
                      <div>Prescription Mgmt</div>
                      <FaPills className="mr-2" />
                  </div>
              </a>
          </div>
      </nav>
    )
  }