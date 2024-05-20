// src/app/[username]/page.tsx
"use client";

import { useState, useEffect } from "react";

export default function UserProfile() {
  const [telegramReady, setTelegramReady] = useState(false);

  useEffect(() => {
    // Check if Telegram's WebApp is ready
    if (
      typeof (window as any).Telegram !== "undefined" &&
      (window as any).Telegram.WebApp.ready
    ) {
      setTelegramReady(true);

      // Example:  Use Telegram.WebApp functions
      console.log("Telegram WebApp is ready!");

      (window as any).Telegram.WebApp.onEvent("close", () => {
        // Handle closing the mini app
        console.log("Telegram Mini App closed");
      });

      // ... Handle other Telegram events and logic ...
    }
  }, []);

  return (
    <div>
      waitt.....
      {telegramReady && (
        <div>
          <h1>Welcome to the Telegram Mini App!</h1>
          {/* Your mini app content */}
        </div>
      )}
    </div>
  );
}
