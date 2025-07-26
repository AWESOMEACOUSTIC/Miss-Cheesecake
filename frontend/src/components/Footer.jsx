import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa'
import logo from '../assets/images/misscheesecake_logo.avif'
import mapImage from '../assets/images/map.avif'

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
              <span>(+91) 9886791733</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <FaEnvelope />
              <span >misscheesecake@gmail.com</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <FaInstagram />
              <a
                href="https://www.instagram.com/__misscheesecake/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C47F6E] hover:underline"
              >
                __misscheesecake
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center sm:flex-row justify-center items-center gap-10 md:gap-50 text-[#C47F6E]">
          <div>
            <h4 className="font-semibold mb-2">Slice O'Clock</h4>
            <p>Monday: Closed (even cheesecake needs a day off)</p>
            <p className="">Tuesday - Friday</p>
            <p>Afternoon Indulgence (2 pm - 5 pm)</p>
            <p>Sunset Slices (6 pm - 9 pm)</p>

            <p className="">Saturday &amp; Sunday</p>
            <p>Brunch &amp; Bakes (10 am - 1 pm)</p>
            <p>Twilight Tasting (4 pm - 7 pm)</p>
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
            </ul>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/miss+cheesecake+location/@26.2798325,73.0160379,15z?entry=s&sa=X&ved=1t%3A199789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="flex flex-col items-center">
            <img
              src={mapImage}
              alt="Our location on map"
              className="w-40 h-40 rounded-full object-cover"
            />
            <p className="mt-2 text-center text-[#C47F6E]">
              We are located at Jodhpur!
            </p>
          </div>
        </a>
      </div>
    </footer>
  )
}
