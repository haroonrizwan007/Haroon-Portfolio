import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-4 sm:py-6 xl:py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={220}
              height={48}
              priority
              className="w-[140px] sm:w-[180px] lg:w-[220px] h-auto"
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
