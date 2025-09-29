import { useEffect } from "react";
import { usePathname } from "next/link";

export default function ScrollToTop() {
  const pathname = usePathname() = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}