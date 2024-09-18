import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderAdmin() {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="italic font-extrabold text-[28px]">
          Good morning <span>Aliza Nurfitrian</span>
        </h2>
        <h4 className="italic text-sm">
          Here’s what’s happening at Open Library Telkom <br />
          University today!
        </h4>
      </div>

      <div className="bg-white text-dark-red flex items-center gap-8 p-2 rounded-lg">
        {/* Tanggal */}
        <p className="flex items-center gap-2 text-sm">
          <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4" />
          Today, 24th March
        </p>

        {/* Jam Operasional */}
        <p className="flex items-center gap-2 text-sm">
          <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
          08.00 - 16.00
        </p>

        {/* Profile Admin */}
        <h2 className="flex items-center font-bold text-xl gap-2">
          Admin <FontAwesomeIcon icon={faCircleUser} className="w-[30px]" />
        </h2>
      </div>
    </div>
  );
}
