/* ═══════════════════════════════════════════════════════════════
   DevStudy — Plataforma de aprendizaje
   HTML / CSS / JS nativo — sin frameworks ni build tools
   Los datos de cada curso se cargan desde cursos/{curso}/day{n}/data.js
   ═══════════════════════════════════════════════════════════════ */

// ─── DATA (cargada desde archivos externos) ──────────────────────
let courses = window.coursesData || [];

// ─── STATE ───────────────────────────────────────────────────────
let activeCourse  = courses[0];
let activeModule  = courses[0].modules[0];
let activeLesson  = courses[0].modules[0].lessons[0];
let activeTab     = "teoria";
let sidebarOpen   = true;
const exStates    = {};

// ─── HELPERS ─────────────────────────────────────────────────────
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function getEx(ex) {
  if (!exStates[ex.id]) {
    exStates[ex.id] = {
      code: ex.starter,
      showHint: false,
      showSolution: false,
      output: "",
      outputVisible: false,
      isError: false,
      isCorrect: false,
      expectedOutput: ex.expectedOutput || ""
    };
  }
  return exStates[ex.id];
}

// ─── RENDER: FULL PAGE ──────────────────────────────────────────
function render() {
  // refrescar lista de cursos por si se cargó un script nuevo dinámicamente
  courses = window.coursesData || [];

  // si el curso activo ya no existe (o es la primera carga), inicializar
  if (!activeCourse || !courses.find(function(x){ return x.id === activeCourse.id; })) {
    activeCourse = courses[0];
    activeModule = activeCourse && activeCourse.modules ? activeCourse.modules[0] : null;
    activeLesson = activeModule && activeModule.lessons ? activeModule.lessons[0] : null;
  }

  var c = activeCourse.color;
  var a = activeCourse.accent;

  document.getElementById("app").innerHTML =
    '<aside class="sidebar' + (sidebarOpen ? '' : ' closed') + '">' +
      renderSidebar(c, a) +
    '</aside>' +
    '<div class="main">' +
      renderHeader(c) +
      renderLessonNav(c) +
      renderTabs(c) +
      '<div class="content"><div class="content-inner">' +
        renderContent(c) +
      '</div></div>' +
    '</div>';

  bindTextareas();
}

// ─── RENDER: SIDEBAR ────────────────────────────────────────────
function renderSidebar(c, a) {
  var html = '';

  html += '<div class="sidebar-header"><div class="sidebar-logo">' +
    '<div class="sidebar-logo-icon" style="background:linear-gradient(135deg,' + c + ',' + a + ')">&#x1F393;</div>' +
    '<div><div class="sidebar-logo-title">DevStudy</div>' +
    '<div class="sidebar-logo-sub">Tu aula de c\u00f3digo</div></div>' +
    '</div></div>';

  html += '<div class="sidebar-courses"><p class="sidebar-section-label">CURSOS</p>';
  for (var i = 0; i < courses.length; i++) {
    var cr = courses[i];
    var isActive = activeCourse.id === cr.id;
    html += '<button class="course-btn' + (isActive ? ' active' : '') + '" data-action="selectCourse" data-id="' + cr.id + '"' +
      ' style="' + (isActive ? 'background:' + cr.color + '12;border-color:' + cr.color + '35' : '') + '">' +
      '<span class="icon">' + cr.icon + '</span>' +
      '<span class="label" style="color:' + (isActive ? cr.color : '#3D5470') + ';font-weight:' + (isActive ? '700' : '400') + '">' + cr.name + '</span>' +
      '</button>';
  }
  html += '</div>';

  html += '<div class="sidebar-modules"><p class="sidebar-section-label">M\u00d3DULOS</p>';
  for (var j = 0; j < activeCourse.modules.length; j++) {
    var m = activeCourse.modules[j];
    var mActive = activeModule.id === m.id;
    var soon = m.status === "coming_soon";
    html += '<button class="module-btn' + (mActive ? ' active' : '') + (soon ? ' coming-soon' : '') + '" data-action="selectModule" data-id="' + m.id + '"' +
      ' style="' + (mActive ? 'background:' + c + '0F;border-color:' + c + '28' : '') + '">' +
      '<div class="day" style="color:' + c + '">' + m.day + '</div>' +
      '<div class="title">' + m.title + '</div>' +
      (soon ? '<div class="soon">Pr\u00f3ximamente</div>' : '') +
      '</button>';
  }
  html += '</div>';

  return html;
}

// ─── RENDER: HEADER ─────────────────────────────────────────────
function renderHeader(c) {
  return '<div class="header">' +
    '<button class="toggle-btn" data-action="toggleSidebar">&#9776;</button>' +
    '<div class="header-info">' +
      '<div class="header-breadcrumb">' +
        '<span class="course-icon">' + activeCourse.icon + '</span>' +
        '<span class="course-name" style="color:' + c + '">' + activeCourse.name + '</span>' +
        '<span class="sep">\u203a</span>' +
        '<span class="day">' + activeModule.day + '</span>' +
      '</div>' +
      '<h2 class="header-title">' + activeModule.title + '</h2>' +
    '</div>' +
    '</div>';
}

// ─── RENDER: LESSON NAV ────────────────────────────────────────
function renderLessonNav(c) {
  var show = activeModule.lessons.length > 0 && (activeTab === "teoria" || activeTab === "ejercicios");
  if (!show) return '';

  var html = '<div class="lesson-nav">';
  for (var i = 0; i < activeModule.lessons.length; i++) {
    var le = activeModule.lessons[i];
    var isActive = activeLesson && activeLesson.id === le.id;
    html += '<button class="lesson-btn" data-action="selectLesson" data-id="' + le.id + '"' +
      ' style="' + (isActive ? 'background:' + c + '16;border-color:' + c + '40;color:' + c + ';font-weight:700' : '') + '">' +
      '<span class="num">L' + le.number + '</span>' + le.title +
      '</button>';
  }
  html += '</div>';
  return html;
}

// ─── RENDER: TABS ───────────────────────────────────────────────
function renderTabs(c) {
  var tabs = [
    { id: "teoria",     label: "Teor\u00eda",              icon: "&#x1F4D6;" },
    { id: "ejercicios", label: "Ejercicios",          icon: "&#x1F4BB;" },
    { id: "actividad",  label: "Actividad de Clase",  icon: "&#x1F465;" },
    { id: "tarea",      label: "Tarea",               icon: "&#x1F4DD;" }
  ];

  var html = '<div class="tabs">';
  for (var i = 0; i < tabs.length; i++) {
    var t = tabs[i];
    var isActive = activeTab === t.id;
    html += '<button class="tab-btn" data-action="setTab" data-id="' + t.id + '"' +
      ' style="color:' + (isActive ? c : '#2D4060') + ';font-weight:' + (isActive ? '700' : '400') +
      ';border-bottom-color:' + (isActive ? c : 'transparent') + '">' +
      t.icon + ' ' + t.label +
      '</button>';
  }
  html += '</div>';
  return html;
}

// ─── RENDER: CONTENT ────────────────────────────────────────────
function renderContent(c) {
  if (activeTab === "teoria")     return renderTheory(c);
  if (activeTab === "ejercicios") return renderExercises(c);
  if (activeTab === "actividad")  return renderActivities(c);
  if (activeTab === "tarea")      return renderHomework(c);
  return '';
}

// ─── RENDER: THEORY ─────────────────────────────────────────────
function renderTheory(c) {
  if (!activeLesson || activeLesson.theory.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F6A7;</div><p>Contenido en construcci\u00f3n</p></div>';

  var html = '';
  for (var i = 0; i < activeLesson.theory.length; i++) {
    var sec = activeLesson.theory[i];
    html += '<div class="theory-card">' +
      '<div class="tag-row">' +
        '<span class="tag" style="background:' + c + '16;color:' + c + '">' + esc(sec.tag) + '</span>' +
        '<h3>' + esc(sec.heading) + '</h3>' +
      '</div>' +
      '<p class="theory-text">' + esc(sec.content) + '</p>' +
      '<pre class="code-block" style="border:1px solid ' + c + '33;border-left:3px solid ' + c + '">' + esc(sec.code) + '</pre>' +
      (sec.callout ? '<div class="callout" style="background:' + c + '10;border:1px solid ' + c + '40">' + esc(sec.callout) + '</div>' : '') +
      '</div>';
  }
  return html;
}

// ─── RENDER: EXERCISES ──────────────────────────────────────────
function renderExercises(c) {
  if (!activeLesson || activeLesson.exercises.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Ejercicios pr\u00f3ximamente</p></div>';

  var html = '<div class="section-header">' +
    '<h3>Ejercicios \u2014 ' + esc(activeLesson.title) + '</h3>' +
    '<p>Escrib\u00ed tu c\u00f3digo, ejecutalo y revis\u00e1 la pista o soluci\u00f3n si la necesit\u00e1s.</p></div>';

  for (var i = 0; i < activeLesson.exercises.length; i++) {
    var ex = activeLesson.exercises[i];
    var es = getEx(ex);

    html += '<div class="exercise-card" style="border:1px solid ' + c + '25" data-ex-card="' + ex.id + '">' +
      '<div class="exercise-header">' +
        '<span class="exercise-tag" style="background:' + c + '20;color:' + c + '">EJ ' + (i + 1) + '</span>' +
        '<h4>' + esc(ex.title) + '</h4>' +
      '</div>' +
      '<p class="exercise-desc">' + esc(ex.description) + '</p>' +
      '<textarea class="exercise-editor" data-ex-editor="' + ex.id + '"' +
        ' style="border-color:' + c + '30" spellcheck="false">' + esc(es.code) + '</textarea>' +
      '<div class="exercise-actions">' +
        '<button class="ex-btn ex-btn-run" data-action="runEx" data-id="' + ex.id + '" style="background:' + c + '">&#x25b6; Ejecutar</button>' +
        '<button class="ex-btn" data-action="toggleHint" data-id="' + ex.id + '" style="background:' + c + '15;color:' + c + '">' +
          '\u{1F4A1} ' + (es.showHint ? 'Ocultar pista' : 'Ver pista') + '</button>' +
        '<button class="ex-btn ex-btn-sol" data-action="toggleSol" data-id="' + ex.id + '">' +
          '\u{1F511} ' + (es.showSolution ? 'Ocultar' : 'Ver soluci\u00f3n') + '</button>' +
        '<button class="ex-btn ex-btn-reset" data-action="resetEx" data-id="' + ex.id + '">\u21ba Reiniciar</button>' +
      '</div>';

    if (es.showHint) {
      html += '<div class="hint-box" style="background:' + c + '0D;border:1px solid ' + c + '30">' +
        '\u{1F4A1} <strong>Pista:</strong> ' + esc(ex.hint) + '</div>';
    }
    if (es.showSolution) {
      html += '<pre class="code-block" style="border:1px solid ' + c + '33;border-left:3px solid ' + c + '">' + esc(ex.solution) + '</pre>';
    }
    if (es.outputVisible) {
      var statusIcon = "";
      var statusStyle = "";
      if (!es.isError && es.expectedOutput) {
        if (es.isCorrect) {
          statusIcon = '✓ CORRECTO';
          statusStyle = 'color:rgb(74, 222, 128);font-weight:700;';
        } else {
          statusIcon = '✗ INCORRECTO';
          statusStyle = 'color:rgb(248, 113, 113);font-weight:700;';
        }
      }

      var modeBadge = '';
      if (es.runMode === 'python') {
        modeBadge = '<span style="float:right;font-size:10px;color:#60A5FA;font-family:monospace">\u{1F40D} Python</span>';
      } else if (es.runMode === 'emulator') {
        modeBadge = '<span style="float:right;font-size:10px;color:#FBBF24;font-family:monospace">\u26A1 Emulador JS</span>';
      }

      html += '<div class="output-box">' +
        (statusIcon
          ? '<p class="output-label" style="' + statusStyle + '">' + statusIcon + modeBadge + '</p>'
          : '<p class="output-label">OUTPUT' + modeBadge + '</p>') +
        '<pre class="output-text ' + (es.isError ? 'error' : (es.isCorrect && !es.isError && es.expectedOutput ? 'success' : '')) + '">' + esc(es.output) + '</pre>' +
        '</div>';
    }

    html += '</div>';
  }
  return html;
}

// ─── RENDER: ACTIVITIES ─────────────────────────────────────────
function renderActivities(c) {
  var acts = activeModule.classActivities;
  if (!acts || acts.length === 0)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Actividades pr\u00f3ximamente</p></div>';

  var html = '<div class="section-header">' +
    '<h3>Actividades de Clase \u2014 ' + esc(activeModule.day) + '</h3>' +
    '<p>3 actividades con dificultad progresiva. Completalas en orden.</p></div>';

  for (var i = 0; i < acts.length; i++) {
    var act = acts[i];
    var dc = act.difficultyColor;
    var timeParts = act.timeEstimate.split(" ");

    html += '<div class="activity-card" style="background:linear-gradient(135deg,' + dc + '08,' + dc + '03);border:1px solid ' + dc + '28">' +
      '<div class="activity-top">' +
        '<div class="activity-info">' +
          '<div class="activity-badges">' +
            '<span class="activity-badge" style="background:' + dc + ';color:#000">\u{1F465} ACTIVIDAD ' + (i + 1) + '</span>' +
            '<span class="activity-badge" style="background:' + dc + '18;color:' + dc + '">' + act.difficulty.toUpperCase() + '</span>' +
          '</div>' +
          '<h3>' + esc(act.title) + '</h3>' +
          '<p class="activity-desc">' + esc(act.description) + '</p>' +
        '</div>' +
        '<div class="activity-time" style="background:' + dc + '14;border:1px solid ' + dc + '30">' +
          '<div class="num" style="color:' + dc + '">' + timeParts[0] + '</div>' +
          '<div class="unit">' + timeParts.slice(1).join(" ") + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="objectives-box"><h4 class="objectives-title">OBJETIVOS</h4>';

    for (var j = 0; j < act.objectives.length; j++) {
      html += '<div class="objective-item">' +
        '<div class="objective-num" style="background:' + dc + '16;border:1px solid ' + dc + '30;color:' + dc + '">' + (j + 1) + '</div>' +
        '<span class="objective-text">' + esc(act.objectives[j]) + '</span>' +
        '</div>';
    }
    html += '</div></div>';
  }
  return html;
}

// ─── RENDER: HOMEWORK ───────────────────────────────────────────
function renderHomework(c) {
  var hw = activeModule.homework;
  if (!hw || !hw.description)
    return '<div class="empty-state"><div class="icon">&#x1F51C;</div><p>Tarea pr\u00f3ximamente</p></div>';

  var html = '<div class="homework-card">' +
    '<span class="homework-tag">&#x1F4DD; TAREA \u2014 ' + esc(activeModule.day) + '</span>' +
    '<h3>' + esc(hw.title) + '</h3>' +
    '<p class="homework-desc">' + esc(hw.description) + '</p>' +
    '<div class="homework-meta">' +
      '<div class="homework-meta-item"><div class="homework-meta-label">ENTREGABLE</div><div class="homework-meta-value">' + esc(hw.deliverable) + '</div></div>' +
      '<div class="homework-meta-item"><div class="homework-meta-label">FECHA</div><div class="homework-meta-value">' + esc(hw.dueDate) + '</div></div>' +
    '</div></div>';

  if (hw.extraChallenge) {
    html += '<div class="extra-challenge" style="background:' + c + '0A;border:1px solid ' + c + '25">' +
      '<span class="star">&#x2B50;</span>' +
      '<div><div class="extra-label" style="color:' + c + '">DESAF\u00cdO EXTRA</div>' +
      '<p class="extra-text">' + esc(hw.extraChallenge) + '</p></div></div>';
  }
  return html;
}

// ─── TEXTAREA BINDING ───────────────────────────────────────────
function bindTextareas() {
  var editors = document.querySelectorAll("[data-ex-editor]");
  for (var i = 0; i < editors.length; i++) {
    (function(ta) {
      ta.addEventListener("input", function() {
        var id = ta.getAttribute("data-ex-editor");
        if (exStates[id]) exStates[id].code = ta.value;
      });
    })(editors[i]);
  }
}

// ─── EXERCISE RUNNER ────────────────────────────────────────────
function runExercise(exId) {
  var es = exStates[exId];
  if (!es) return;

  es.output = "\u23f3 Ejecutando...";
  es.outputVisible = true;
  es.isError = false;
  es.isCorrect = false;
  es.runMode = "";
  renderContentArea();

  executePython(es.code, function(result) {
    es.output = result.output;
    es.isError = result.error;
    es.runMode = result.mode;

    if (!es.isError && es.expectedOutput) {
      es.isCorrect = validateOutput(es.output, es.expectedOutput);
    }

    es.outputVisible = true;
    renderContentArea();
  });
}

// ─── EXECUTE: PYTHON BACKEND (PRIMARY) ──────────────────────────
function executePython(code, callback) {
  fetch("/api/execute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code: code })
  })
  .then(function(res) { return res.json(); })
  .then(function(data) {
    var output = (data.output || "").replace(/\r\n/g, "\n").replace(/\n$/, "");
    callback({
      output: output || "(sin salida visible)",
      error: data.error || false,
      mode: "python"
    });
  })
  .catch(function() {
    executeEmulator(code, callback);
  });
}

// ─── PYTHON → JS TRANSPILER ────────────────────────────────────
function _pyToJS(code) {
  var src = code.split('\n');
  var out = [];
  var blockStack = [];
  var classNames = [];
  for (var i = 0; i < src.length; i++) {
    var cm = src[i].trim().match(/^class\s+(\w+)/);
    if (cm) classNames.push(cm[1]);
  }
  for (var i = 0; i < src.length; i++) {
    var raw = src[i];
    var trimmed = raw.trim();
    if (!trimmed || /^#/.test(trimmed)) continue;
    var indent = 0;
    for (var c = 0; c < raw.length; c++) {
      if (raw[c] === ' ') indent++;
      else if (raw[c] === '\t') indent += 4;
      else break;
    }
    var isCont = /^(elif\b|else\s*:|except\b|finally\s*:)/.test(trimmed);
    while (blockStack.length > 0 && indent <= blockStack[blockStack.length - 1]) {
      blockStack.pop();
      out.push(_pyPad(blockStack.length) + '}');
    }
    if (isCont && out.length > 0 && out[out.length - 1].trim() === '}') {
      var brace = out.pop();
      var pad = brace.replace(/\}.*/, '');
      var conv = _pyLine(trimmed, classNames);
      out.push(pad + '} ' + conv.js + (conv.block ? ' {' : ''));
      if (conv.block) blockStack.push(indent);
    } else {
      var conv = _pyLine(trimmed, classNames);
      if (conv.block) {
        out.push(_pyPad(blockStack.length) + conv.js + ' {');
        blockStack.push(indent);
      } else {
        out.push(_pyPad(blockStack.length) + conv.js);
      }
    }
  }
  while (blockStack.length > 0) {
    blockStack.pop();
    out.push(_pyPad(blockStack.length) + '}');
  }
  return out.join('\n');
}

function _pyPad(n) { var s = ''; for (var i = 0; i < n; i++) s += '  '; return s; }

function _pyLine(line, cn) {
  if (/^import\b|^from\s+\w+\s+import\b/.test(line))
    return { js: '// ' + line, block: false };
  if (line === 'pass') return { js: '/* pass */', block: false };
  var dm = line.match(/^del\s+(\w+)\[(.+)\]/);
  if (dm) return { js: dm[1] + '.splice(' + _pyExpr(dm[2], cn) + ', 1);', block: false };
  var clm = line.match(/^class\s+(\w+)(?:\s*\((\w+)\))?\s*:/);
  if (clm) return { js: 'class ' + clm[1] + (clm[2] ? ' extends ' + clm[2] : ''), block: true };
  var ini = line.match(/^def\s+__init__\s*\(\s*self\s*,?\s*(.*?)\)\s*:/);
  if (ini) return { js: 'constructor(' + ini[1].trim() + ')', block: true };
  if (/^def\s+__str__\s*\(\s*self\s*\)\s*:/.test(line))
    return { js: 'toString()', block: true };
  var mm = line.match(/^def\s+(\w+)\s*\(\s*self\s*,?\s*(.*?)\)\s*:/);
  if (mm) return { js: mm[1] + '(' + mm[2].trim() + ')', block: true };
  var fm = line.match(/^def\s+(\w+)\s*\(([^)]*)\)\s*:/);
  if (fm) return { js: 'function ' + fm[1] + '(' + _pyExpr(fm[2], cn) + ')', block: true };
  var fo = line.match(/^for\s+(.+?)\s+in\s+(.+?)\s*:/);
  if (fo) {
    var vars = fo[1].trim();
    var iter = _pyExpr(fo[2].trim(), cn);
    if (vars.indexOf(',') !== -1) vars = '[' + vars + ']';
    return { js: 'for (var ' + vars + ' of ' + iter + ')', block: true };
  }
  var wm = line.match(/^while\s+(.+?)\s*:/);
  if (wm) return { js: 'while (' + _pyExpr(wm[1], cn) + ')', block: true };
  var im = line.match(/^if\s+(.+?)\s*:/);
  if (im) return { js: 'if (' + _pyExpr(im[1], cn) + ')', block: true };
  var em = line.match(/^elif\s+(.+?)\s*:/);
  if (em) return { js: 'else if (' + _pyExpr(em[1], cn) + ')', block: true };
  if (/^else\s*:/.test(line)) return { js: 'else', block: true };
  if (/^try\s*:/.test(line)) return { js: 'try', block: true };
  var exc = line.match(/^except\s+(\w+)(?:\s+as\s+(\w+))?\s*:/);
  if (exc) return { js: 'catch (' + (exc[2] || '_e') + ')', block: true };
  if (/^except\s*:/.test(line)) return { js: 'catch (_e)', block: true };
  if (/^finally\s*:/.test(line)) return { js: 'finally', block: true };
  var rm = line.match(/^raise\s+(.*)/);
  if (rm) {
    var rex = rm[1].trim();
    if (/^\w+\(/.test(rex)) return { js: 'throw new ' + _pyExpr(rex, cn) + ';', block: false };
    return { js: 'throw new ' + _pyExpr(rex, cn) + '();', block: false };
  }
  var ret = line.match(/^return\b\s*(.*)/);
  if (ret) return { js: 'return ' + _pyExpr(ret[1], cn) + ';', block: false };
  var up = line.match(/^(\w+(?:\s*,\s*\w+)+)\s*=\s*(.+)$/);
  if (up) {
    var lhs = up[1].trim();
    var rhs = up[2].trim();
    var fc = rhs.indexOf(','), fp = rhs.indexOf('(');
    var wrap = fc !== -1 && (fp === -1 || fc < fp);
    if (wrap) return { js: '[' + lhs + '] = [' + _pyExpr(rhs, cn) + '];', block: false };
    return { js: '[' + lhs + '] = ' + _pyExpr(rhs, cn) + ';', block: false };
  }
  return { js: _pyExpr(line, cn) + ';', block: false };
}

function _pyExpr(e, cn) {
  if (!e) return '';
  var r = e;
  r = r.replace(/\bprint\s*\(/g, '__p__(');
  r = r.replace(/\bself\./g, 'this.');
  r = r.replace(/\blambda\s+([^:]+):\s*(.+)/g, function(_, a, b) {
    return 'function(' + a.trim() + '){ return ' + b.trim() + '; }';
  });
  r = r.replace(/\bTrue\b/g, 'true');
  r = r.replace(/\bFalse\b/g, 'false');
  r = r.replace(/\bNone\b/g, 'null');
  r = r.replace(/\bnot\s+in\b/g, ' __NI__ ');
  r = r.replace(/\band\b/g, '&&');
  r = r.replace(/\bor\b/g, '||');
  r = r.replace(/\bnot\b/g, '!');
  r = r.replace(/(\S+)\s+__NI__\s+(\S+)/g, '!__in__($1, $2)');
  r = r.replace(/([a-zA-Z0-9_)\]]+)\s*\/\/\s*([a-zA-Z0-9_(]+)/g, 'Math.floor($1/$2)');
  r = r.replace(/\.append\(/g, '.push(');
  r = r.replace(/f"([^"]*)"/g, function(_, c) { return '`' + c.replace(/\{/g, '${') + '`'; });
  r = r.replace(/f'([^']*)'/g, function(_, c) { return '`' + c.replace(/\{/g, '${') + '`'; });
  r = r.replace(/(\w+)\.items\(\)/g, 'Object.entries($1)');
  r = r.replace(/(\w+)\.keys\(\)/g, 'Object.keys($1)');
  r = r.replace(/(\w+)\.values\(\)/g, 'Object.values($1)');
  r = r.replace(/(\w+)\.get\(([^,)]+),\s*([^)]+)\)/g, '($2 in $1 ? $1[$2] : $3)');
  r = r.replace(/(\w+)\.get\(([^)]+)\)/g, '($2 in $1 ? $1[$2] : null)');
  r = r.replace(/(\w+)\.setdefault\(([^,]+),\s*([^)]+)\)/g, '__setdefault__($1, $2, $3)');
  r = r.replace(/\.index\(/g, '.indexOf(');
  r = r.replace(/\btype\(/g, '__type__(');
  r = r.replace(/__type__\(([^)]+)\)\.__name__/g, '__typeName__($1)');
  r = r.replace(/\bset\(\)/g, 'new Set()');
  r = r.replace(/\bset\(\[/g, 'new Set([');
  r = r.replace(/\[([^\]]+?)\s+for\s+(\w+)\s+in\s+([^\]]+?)\s+if\s+([^\]]+)\]/g,
    function(_, expr, v, iter, cond) {
      return _pyExpr(iter, cn) + '.filter(function(' + v + '){return ' + _pyExpr(cond, cn) + ';}).map(function(' + v + '){return ' + _pyExpr(expr, cn) + ';})';
    });
  r = r.replace(/\[([^\]]+?)\s+for\s+(\w+)\s+in\s+([^\]]+)\]/g,
    function(_, expr, v, iter) {
      return _pyExpr(iter, cn) + '.map(function(' + v + '){return ' + _pyExpr(expr, cn) + ';})';
    });
  r = r.replace(/\bsum\(([^)]+?)\s+for\s+(\w+)\s+in\s+([^)]+?)\s+if\s+([^)]+)\)/g,
    function(_, expr, v, iter, cond) {
      return _pyExpr(iter, cn) + '.filter(function(' + v + '){return ' + _pyExpr(cond, cn) + ';}).map(function(' + v + '){return ' + _pyExpr(expr, cn) + ';}).reduce(function(a,b){return a+b;},0)';
    });
  if (cn && cn.length > 0) {
    for (var ci = 0; ci < cn.length; ci++) {
      var pat = new RegExp('\\b' + cn[ci] + '\\(', 'g');
      r = r.replace(pat, 'new ' + cn[ci] + '(');
    }
    r = r.replace(/\bnew\s+new\b/g, 'new');
  }
  return r;
}

function _pyStr(v) {
  if (v === null || v === undefined) return 'None';
  if (v === true) return 'True';
  if (v === false) return 'False';
  if (v instanceof Error) return v.message;
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return '[' + v.map(_pyRepr).join(', ') + ']';
  if (v instanceof Set) return '{' + Array.from(v).map(_pyRepr).join(', ') + '}';
  if (typeof v === 'object') {
    if (v.constructor && v.constructor !== Object && v.toString !== Object.prototype.toString) {
      return v.toString();
    }
    var p = [], k = Object.keys(v);
    for (var i = 0; i < k.length; i++) p.push(_pyRepr(k[i]) + ': ' + _pyRepr(v[k[i]]));
    return '{' + p.join(', ') + '}';
  }
  return String(v);
}

function _pyRepr(v) {
  if (typeof v === 'string') return "'" + v + "'";
  return _pyStr(v);
}

// ─── EXECUTE: JS EMULATOR (FALLBACK) ───────────────────────────
function executeEmulator(code, callback) {
  var outputLines = [];

  if (/\bopen\s*\(|\.read\(\)|\.write\(|\.readlines\(\)|csv\.\w|os\.replace|os\.path/.test(code)) {
    callback({
      output: "\u26a0 Este ejercicio requiere acceso al sistema de archivos.\nUs\u00e1 el servidor Python para ejecutarlo.\nEl emulador JS no soporta operaciones de I/O.",
      error: true,
      mode: "emulator"
    });
    return;
  }

  try {
    var js = _pyToJS(code);

    var ctx = { _out: outputLines, _pyStr: _pyStr, _pyRepr: _pyRepr };

    var h =
      "var _out=this._out,_pyStr=this._pyStr,_pyRepr=this._pyRepr;\n" +
      "function __p__(){var p=[];for(var i=0;i<arguments.length;i++)p.push(_pyStr(arguments[i]));_out.push(p.join(' '));}\n" +
      "function __type__(v){" +
        "if(v===null||v===undefined)return '<class \\'NoneType\\'>';" +
        "if(typeof v==='boolean')return '<class \\'bool\\'>';" +
        "if(typeof v==='number')return Number.isInteger(v)?'<class \\'int\\'>':'<class \\'float\\'>';" +
        "if(typeof v==='string')return '<class \\'str\\'>';" +
        "if(Array.isArray(v))return '<class \\'list\\'>';" +
        "if(v instanceof Set)return '<class \\'set\\'>';" +
        "if(typeof v==='object')return '<class \\'dict\\'>';" +
        "return '<class \\'' + typeof v + '\\'>';}\n" +
      "function __typeName__(v){" +
        "if(v===null||v===undefined)return 'NoneType';" +
        "if(typeof v==='boolean')return 'bool';" +
        "if(typeof v==='number')return Number.isInteger(v)?'int':'float';" +
        "if(typeof v==='string')return 'str';" +
        "if(Array.isArray(v))return 'list';" +
        "if(v instanceof Error)return v.name||'Error';" +
        "if(typeof v==='object')return 'dict';return typeof v;}\n" +
      "function __in__(val,c){" +
        "if(Array.isArray(c))return c.indexOf(val)!==-1;" +
        "if(c instanceof Set)return c.has(val);" +
        "if(typeof c==='string')return c.indexOf(val)!==-1;" +
        "return val in c;}\n" +
      "function __setdefault__(o,k,d){if(!(k in o))o[k]=d;return o[k];}\n" +
      "function range(a,b,c){var r=[];if(b===undefined){b=a;a=0;}if(!c)c=1;" +
        "if(c>0)for(var i=a;i<b;i+=c)r.push(i);" +
        "else for(var i=a;i>b;i+=c)r.push(i);return r;}\n" +
      "function len(x){if(x instanceof Set)return x.size;if(typeof x==='object'&&!Array.isArray(x))return Object.keys(x).length;return x.length;}\n" +
      "function sum(a){if(typeof a==='number')return a;var t=0;for(var i=0;i<a.length;i++)t+=a[i];return t;}\n" +
      "function max(){var a=arguments.length===1&&Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments);return Math.max.apply(null,a);}\n" +
      "function min(){var a=arguments.length===1&&Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments);return Math.min.apply(null,a);}\n" +
      "function abs(x){return Math.abs(x);}\n" +
      "function pow(a,b){return Math.pow(a,b);}\n" +
      "function round(v,n){if(n===undefined)return Math.round(v);var f=Math.pow(10,n);return Math.round(v*f)/f;}\n" +
      "function sorted(a){var c=a.slice();c.sort(function(x,y){return typeof x==='number'&&typeof y==='number'?x-y:String(x).localeCompare(String(y));});return c;}\n" +
      "function enumerate(a){var r=[];for(var i=0;i<a.length;i++)r.push([i,a[i]]);return r;}\n" +
      "function zip(){var a=Array.prototype.slice.call(arguments);var m=Math.min.apply(null,a.map(function(x){return x.length;}));var r=[];for(var i=0;i<m;i++){var t=[];for(var j=0;j<a.length;j++)t.push(a[j][i]);r.push(t);}return r;}\n" +
      "function str(v){return _pyStr(v);}\n" +
      "function int(v){var n=parseInt(v,10);if(isNaN(n))throw new ValueError('invalid literal for int()');return n;}\n" +
      "function float(v){var n=parseFloat(v);if(isNaN(n))throw new ValueError('could not convert to float');return n;}\n" +
      "function bool(v){return !!v;}\n" +
      "function list(v){return Array.from(v);}\n" +
      "function tuple(v){return Array.from(v);}\n" +
      "function dict(v){if(!v)return {};var r={};for(var i=0;i<v.length;i++)r[v[i][0]]=v[i][1];return r;}\n" +
      "function input(p){return '';}\n" +
      "var Exception=Error;\n" +
      "function ValueError(m){var e=new Error(m);e.name='ValueError';return e;}\n" +
      "function ZeroDivisionError(m){var e=new Error(m);e.name='ZeroDivisionError';return e;}\n" +
      "function KeyError(m){var e=new Error(m);e.name='KeyError';return e;}\n" +
      "function IndexError(m){var e=new Error(m);e.name='IndexError';return e;}\n";

    new Function(h + js).call(ctx);

    callback({
      output: outputLines.join("\n") || "(sin salida visible)",
      error: false,
      mode: "emulator"
    });
  } catch (e) {
    callback({
      output: "\u26a0 " + e.message,
      error: true,
      mode: "emulator"
    });
  }
}

// ─── VALIDATE OUTPUT ────────────────────────────────────────────
function validateOutput(actualOutput, expectedOutput) {
  var actual = actualOutput.trim().split("\n").map(function(line) {
    return line.trim();
  }).join("\n");

  var expected = expectedOutput.trim().split("\n").map(function(line) {
    return line.trim();
  }).join("\n");

  if (actual === expected) return true;

  // Normalize float trailing .0 so "121" matches "121.0"
  var norm = function(s) { return s.replace(/\b(\d+)\.0\b/g, '$1'); };
  return norm(actual) === norm(expected);
}

// ─── ACTIONS ────────────────────────────────────────────────────
function selectCourse(id) {
  for (var i = 0; i < courses.length; i++) {
    if (courses[i].id === id) {
      activeCourse = courses[i];
      activeModule = activeCourse.modules[0];
      activeLesson = activeModule.lessons[0] || null;
      activeTab = "teoria";
      render();
      return;
    }
  }
}

function selectModule(id) {
  for (var i = 0; i < activeCourse.modules.length; i++) {
    var m = activeCourse.modules[i];
    if (m.id === Number(id)) {
      if (m.status === "coming_soon") return;
      activeModule = m;
      activeLesson = m.lessons[0] || null;
      activeTab = "teoria";
      render();
      return;
    }
  }
}

function selectLesson(id) {
  for (var i = 0; i < activeModule.lessons.length; i++) {
    if (activeModule.lessons[i].id === id) {
      activeLesson = activeModule.lessons[i];
      render();
      return;
    }
  }
}

function setTab(id) {
  activeTab = id;
  render();
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  render();
}

function toggleHint(exId) {
  var es = exStates[exId];
  if (es) { es.showHint = !es.showHint; renderContentArea(); }
}

function toggleSolution(exId) {
  var es = exStates[exId];
  if (es) { es.showSolution = !es.showSolution; renderContentArea(); }
}

function resetExercise(exId) {
  var exercises = getAllExercises();
  for (var i = 0; i < exercises.length; i++) {
    if (exercises[i].id === exId) {
      exStates[exId] = {
        code: exercises[i].starter,
        showHint: false,
        showSolution: false,
        output: "",
        outputVisible: false,
        isError: false,
        isCorrect: false,
        expectedOutput: exercises[i].expectedOutput || ""
      };
      renderContentArea();
      return;
    }
  }
}

function getAllExercises() {
  var all = [];
  for (var c = 0; c < courses.length; c++) {
    for (var m = 0; m < courses[c].modules.length; m++) {
      for (var l = 0; l < courses[c].modules[m].lessons.length; l++) {
        all = all.concat(courses[c].modules[m].lessons[l].exercises);
      }
    }
  }
  return all;
}

function renderContentArea() {
  var contentInner = document.querySelector(".content-inner");
  if (contentInner) {
    contentInner.innerHTML = renderContent(activeCourse.color);
    bindTextareas();
  }
}

// ─── GLOBAL EVENT HANDLER ───────────────────────────────────────
function handleClick(e) {
  var btn = e.target.closest("[data-action]");
  if (!btn) return;

  var action = btn.getAttribute("data-action");
  var id = btn.getAttribute("data-id");

  switch (action) {
    case "selectCourse":  selectCourse(id); break;
    case "selectModule":  selectModule(id); break;
    case "selectLesson":  selectLesson(id); break;
    case "setTab":        setTab(id); break;
    case "toggleSidebar": toggleSidebar(); break;
    case "runEx":         saveTextareaValue(id); runExercise(id); break;
    case "toggleHint":    saveTextareaValue(id); toggleHint(id); break;
    case "toggleSol":     saveTextareaValue(id); toggleSolution(id); break;
    case "resetEx":       resetExercise(id); break;
  }
}

function saveTextareaValue(exId) {
  var ta = document.querySelector('[data-ex-editor="' + exId + '"]');
  if (ta && exStates[exId]) exStates[exId].code = ta.value;
}

// ─── INIT ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("click", handleClick);
  render();
});
