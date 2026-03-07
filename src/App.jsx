import React, { useEffect, useState, useCallback } from "react";
import Day1 from "./cursos/python/day1/LearningPlatform";

export default function App() {
  const getRouteFromPath = () => (window.location.pathname.replace(/^\//, "") || "day1");
  const [route, setRoute] = useState(getRouteFromPath());

  useEffect(() => {
    const onPop = () => setRoute(getRouteFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = useCallback((r) => {
    const path = "/" + r;
    if (window.location.pathname !== path) window.history.pushState({}, "", path);
    setRoute(r);
  }, []);

  return (
    <div style={{ height: "100vh", background: "#060B18", color: "#E2E8F0" }}>
      <div>
        {route === "day1" && <Day1 />}
        {route !== "day1" && (
          <div style={{ padding: 24 }}>
            Seleccioná un día del curso en el menú (por ahora solo Día 1 disponible).
          </div>
        )}
      </div>
    </div>
  );
}
