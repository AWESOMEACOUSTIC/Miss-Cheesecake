import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa'
import logo from '../assets/images/misscheesecake_logo.png'
import mapImage from '../assets/images/map.png'

export default function Footer() {
  return (
    <footer className="bg-[#F6E0DE] py-12 px-8">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between gap-12 ">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={logo}
            alt="Miss Cheesecake Logo"
            className="w-24 h-24 rounded-full"
          />
          <div className="space-y-2 flex flex-col text-[#C47F6E]">
            <div className="inline-flex items-center space-x-2">
              <FaPhoneAlt />
              <span>(+91) 9886791733</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <FaEnvelope />
              <span>info@misscheesecake.com</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <FaInstagram />
              <span>@misscheesecake</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-50 text-[#C47F6E]">
          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <p>Tuesday</p>
            <p>Dinner only (6:30, 8:30 pm)</p>
            <p className="mt-4">Wednesday - Sunday</p>
            <p>Lunch only (12:30, 2:30 pm)</p>
            <p>Dinner only (6:30, 8:30 pm)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Navigate</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cheesecakes" className="hover:underline">
                  Cheesecakes
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={mapImage}
            alt="Our location on map"
            className="w-40 h-40 rounded-full object-cover"
          />
          <p className="mt-2 text-center text-[#C47F6E]">
            We are located inside The Courtyard!
          </p>
        </div>
      </div>
    </footer>
  )
}
