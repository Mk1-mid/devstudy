/* ═══════════════════════════════════════════════════════════════
   DevStudy — Plataforma de aprendizaje
   HTML / CSS / JS nativo — sin frameworks ni build tools
   Los datos de cada curso se cargan desde cursos/{curso}/day{n}/data.js
   ═══════════════════════════════════════════════════════════════ */

// ─── DATA (cargada desde archivos externos) ──────────────────────
const courses = window.coursesData || [];

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

// ─── EXECUTE: JS EMULATOR (FALLBACK) ───────────────────────────
function executeEmulator(code, callback) {
  var lines = [];
  var fakePrint = function() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) args.push(String(arguments[i]));
    lines.push(args.join(" "));
  };

  try {
    var js = code
      .replace(/^\s*#[^\n]*/gm, "")
      .replace(/print\s*\(/g, "__p__(")
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false")
      .replace(/\band\b/g, "&&")
      .replace(/\bor\b/g, "||")
      .replace(/\bnot\b/g, "!");

    var helpers =
      "function range(a,b,c){var r=[];if(b===undefined){b=a;a=0;}if(!c)c=1;" +
      "if(c>0)for(var i=a;i<b;i+=c)r.push(i);" +
      "else for(var i=a;i>b;i+=c)r.push(i);return r;}" +
      "function len(x){return x.length;}" +
      "function type(x){return '<class \\'' + typeof x + '\\'>';}";

    new Function("__p__", helpers + js)(fakePrint);
    callback({
      output: lines.join("\n") || "(sin salida visible)",
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

  return actual === expected;
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
