import Image from "next/image";
import { footerColumns } from "@/data/footerLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left Section */}
        <div className="space-y-4">
          <Image src="/black_logo.png" alt="Coders India" width={200} height={50} />
          <div className="text-sm space-y-2">
            <p><strong>Corporate & Communications Address:</strong><br/>
              A-143, 7th Floor, Sovereign Corporate Tower, Sector-136, Noida, UP - 201305
            </p>
            <p><strong>Registered Address:</strong><br/>
              K 061, Tower K, Gulshan Vivante, Sector 137, Noida, UP - 201305
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="#"><Image src="/social/facebook.svg" alt="Facebook" width={30} height={30} /></Link>
            <Link href="#"><Image src="/social/instagram.svg" alt="Instagram" width={30} height={30} /></Link>
            <Link href="#"><Image src="/social/linkedin.svg" alt="LinkedIn" width={30} height={30} /></Link>
            <Link href="#"><Image src="/social/youtube.svg" alt="YouTube" width={30} height={30} /></Link>
          </div>

          {/* Advertise Button */}
          <div className="mt-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md">
              Advertise with us
            </button>
          </div>
        </div>

        {/* Right Links Section */}
        <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {footerColumns.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href="#" className="hover:text-blue-600 transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-6 mt-12 text-sm text-gray-500 border-t border-gray-300">
        © {new Date().getFullYear()} CodersIndia. All rights reserved.
      </div>
    </footer>
  );
}
