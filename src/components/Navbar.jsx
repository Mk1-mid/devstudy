import React from "react";

export default function Navbar({ onNavigate, active }) {
  return (
    <nav style={{ display: "flex", gap: 10, padding: 12, background: "#070D1D", color: "#E2E8F0", alignItems: "center" }}>
      <div style={{ fontWeight: 700, marginRight: 8 }}>DevStudy</div>
      <button onClick={() => onNavigate("day1")} style={{
        background: active === "day1" ? "#2563EB" : "transparent",
        color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8, cursor: "pointer"
      }}>Día 1</button>

      <button onClick={() => onNavigate("day2")} style={{
        background: active === "day2" ? "#10B981" : "transparent",
        color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8, cursor: "pointer"
      }}>Día 2</button>

      <div style={{ marginLeft: "auto", fontSize: 13, color: "#94A3B8" }}>
        Cursos: Python · HTML&CSS · JS · BD
      </div>
    </nav>
  );
}
