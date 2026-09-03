"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1uA6SdDmZOXKNRWWfYs5zYjErfqRiKI4TDDMg3f20Ya05OEo9dbnCjT8Y_Az850uswG27EyAuQ?gv=true";
const CSS_HREF = "https://calendar.google.com/calendar/scheduling-button-script.css";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export function GoogleCalendarBooking() {
  const buttonHost = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
  }, []);

  function mountButton() {
    if (mounted.current || !buttonHost.current || !window.calendar?.schedulingButton) return;
    mounted.current = true;
    buttonHost.current.innerHTML = "";
    window.calendar.schedulingButton.load({
      url: SCHEDULE_URL,
      color: "#243cdd",
      label: "Book an appointment",
      target: buttonHost.current,
    });
  }

  useEffect(() => {
    mountButton();
  }, []);

  return (
    <>
      <div ref={buttonHost} className="min-h-12" />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
        onLoad={mountButton}
      />
    </>
  );
}
