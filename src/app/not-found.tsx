"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    // Redirect old /farazahmedabir/* URLs to root
    if (pathname && pathname.startsWith("/farazahmedabir")) {
      const newPath = pathname.replace("/farazahmedabir", "") || "/";
      window.location.replace(newPath);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          Redirecting to the correct page...
        </p>
      </div>
    </div>
  );
}
