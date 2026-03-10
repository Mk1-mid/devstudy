/* ═══════════════════════════════════════════════════════════════
   DevStudy — Servidor local (Node.js)
   Ejecuta código Python real y sirve la app estática.
   ═══════════════════════════════════════════════════════════════ */

const express  = require("express");
const { execFile } = require("child_process");
const fs   = require("fs");
const path = require("path");
const os   = require("os");

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "64kb" }));
app.use(express.static(__dirname));

// ─── API: Ejecutar código Python ────────────────────────────────
app.post("/api/execute", function (req, res) {
  var code = req.body.code;
  if (!code || typeof code !== "string") {
    return res.json({ output: "", error: false });
  }

  // Limitar tamaño del código (prevenir abuso)
  if (code.length > 10000) {
    return res.json({ output: "Código demasiado largo", error: true });
  }

  // Escribir a archivo temporal (evita inyección de comandos)
  var tmpFile = path.join(
    os.tmpdir(),
    "devstudy_" + Date.now() + "_" + Math.random().toString(36).slice(2) + ".py"
  );

  fs.writeFile(tmpFile, code, "utf8", function (writeErr) {
    if (writeErr) {
      return res.json({ output: "Error interno al escribir archivo", error: true });
    }

    execFile("python", [tmpFile], { timeout: 5000 }, function (error, stdout, stderr) {
      // Limpiar archivo temporal
      fs.unlink(tmpFile, function () {});

      if (error) {
        if (error.killed) {
          return res.json({
            output: "\u26a0 Tiempo excedido (posible bucle infinito)",
            error: true
          });
        }
        // Extraer solo la última línea del error de Python
        var errorLines = (stderr || "").trim().split("\n");
        var lastLine = errorLines[errorLines.length - 1] || error.message;
        return res.json({ output: "\u26a0 " + lastLine, error: true });
      }

      res.json({ output: stdout, error: false });
    });
  });
});

// ─── Health check ───────────────────────────────────────────────
app.get("/api/health", function (_req, res) {
  res.json({ status: "ok", python: true });
});

// ─── SPA FALLBACK: Servir index.html para todas las rutas no-API ─
app.get("*", function (req, res) {
  if (!req.path.startsWith("/api/")) {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

// ─── START ──────────────────────────────────────────────────────
const server = app.listen(PORT, "0.0.0.0", function () {
  console.log("");
  console.log("  ╔══════════════════════════════════════════╗");
  console.log("  ║   DevStudy corriendo en:                 ║");
  console.log("  ║   http://0.0.0.0:" + PORT + "                      ║");
  console.log("  ║   Python habilitado  ✓                   ║");
  console.log("  ╚══════════════════════════════════════════╝");
  console.log("");
});

server.on('error', function(err) {
  if (err && err.code === 'EADDRINUSE') {
    console.error('\nError: el puerto ' + PORT + ' ya está en uso.');
    console.error('Soluciones: 1) cerrar el proceso que usa el puerto; 2) ejecutar con otra variable PORT.');
    console.error('En Windows: ejecutar `netstat -aon | findstr :' + PORT + '` para ubicar PID y luego `taskkill /PID <pid> /F`.');
    process.exit(1);
  } else {
    console.error(err);
    process.exit(1);
  }
});
