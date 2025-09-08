/* ---------- Part 1: Basics (variables, conditionals, simple I/O) ---------- */
// Identity + preferences (variables)
const author = "Flavian Mwaura";
let prefersLight = false;
const defaultSkills = ["DirectX", "C++", "Win32 API", "Python Workflows", "Tech Docs"];

// Operators + conditional
const projectsCount = 3 + 2; // arithmetic operator example
const baseRole = "Graphics Programmer & Technical Communicator";
const extendedRole = projectsCount > 4 ? `${baseRole} • Portfolio in progress` : baseRole;

// Write to DOM (also Part 4 interaction)
document.getElementById("tagline").textContent = extendedRole;

/* ---------- Part 2: Functions (reusability) ---------- */
// 1) Pure function
function formatTagline(name, role, count) {
  const label = count >= 5 ? "Senior mindset" : "Emerging pro";
  return `${name} — ${role} (${label})`;
}

// 2) DOM-affecting function
function renderSkills(skills) {
  const ul = document.getElementById("skillsList");
  ul.innerHTML = "";
  // Loop #1 (forEach)
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
}

/* ---------- Part 3: Loops (for, while, forEach) ---------- */
// 3) Another loop example (classic for)
function countLetters(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/i.test(str[i])) total++;
  }
  return total;
}

/* ---------- Part 4: DOM interactions (select, listen, update) ---------- */
// 1) Theme toggle (toggle class + aria)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  prefersLight = !prefersLight;
  document.body.classList.toggle("light", prefersLight);
  themeToggle.setAttribute("aria-pressed", String(prefersLight));
});

//Add skill button
document.getElementById("addSkillBtn").addEventListener("click", () => {
  const input = document.getElementById("newSkill");
  const skill = input.value.trim();

  if (!skill) return; // ignore empty input

  defaultSkills.push(skill);   // add to skills array
  renderSkills(defaultSkills); // re-render list
  input.value = "";            // clear input
});
// 2) Personalized greeting (input + conditional)
document.getElementById("greetBtn").addEventListener("click", () => {
  const input = document.getElementById("visitorName");
  const greeting = document.getElementById("greeting");
  const name = input.value.trim();

  if (!name) {
    greeting.textContent = "Please enter a name.";
    return;
  }

  const tagline = formatTagline(author, baseRole, projectsCount);
  const letters = countLetters(name);
  greeting.textContent = `Hi ${name}! I'm ${author}. Tagline: ${tagline}. Your name has ${letters} letters.`;
});

// 3) Create a dynamic note (createElement + appendChild)
document.getElementById("spawnNoteBtn").addEventListener("click", () => {
  const notes = document.getElementById("notes");
  const note = document.createElement("div");
  note.className = "note";
  note.textContent = `Note @ ${new Date().toLocaleTimeString()}: Keep it simple and modular.`;
  notes.appendChild(note);
});

// 4) Countdown using a while loop (Loop #2) + basic async pacing
document.getElementById("countdownBtn").addEventListener("click", async () => {
  const label = document.getElementById("countdownStatus");
  const btn = document.getElementById("countdownBtn");
  btn.disabled = true;
  let n = 5;
  while (n >= 0) {
    label.textContent = `T-${n}`;
    await new Promise((r) => setTimeout(r, 400));
    n--;
  }
  label.textContent = "Done!";
  btn.disabled = false;
});

/* ---------- Init ---------- */
document.getElementById("tagline").textContent = formatTagline(author, baseRole, projectsCount);
renderSkills(defaultSkills);
