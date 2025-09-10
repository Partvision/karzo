import Fuse from "fuse.js";
import { buildLinks } from "./data.js";

/* state */
const allLinks = buildLinks();
const allCategories = Array.from(
  new Set(allLinks.flatMap(l => l.categories))
).sort();

let activeCategories = new Set();
let query = "";

/* elements */
const listEl = document.getElementById("list");
const filtersEl = document.getElementById("category-filters");
const countEl = document.getElementById("count");
const searchEl = document.getElementById("search");
const copyBtn = document.getElementById("copy-visible");
const exportJsonBtn = document.getElementById("export-json");
const exportCsvBtn = document.getElementById("export-csv");
const resetBtn = document.getElementById("reset");

/* search */
const fuse = new Fuse(allLinks, {
  includeScore: false,
  threshold: 0.35,
  keys: ["host", "url", "categories"]
});

/* render category chips */
function renderChips() {
  filtersEl.innerHTML = "";
  allCategories.forEach(cat => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = cat;
    btn.setAttribute("data-cat", cat);
    btn.addEventListener("click", () => {
      if (activeCategories.has(cat)) activeCategories.delete(cat);
      else activeCategories.add(cat);
      btn.classList.toggle("active");
      render();
    });
    filtersEl.appendChild(btn);
  });
}

/* filter + search */
function getVisible() {
  let base = query ? fuse.search(query).map(r => r.item) : allLinks.slice();
  if (activeCategories.size) {
    base = base.filter(l => l.categories.some(c => activeCategories.has(c)));
  }
  return base;
}

/* render list */
function render() {
  const items = getVisible();
  countEl.textContent = items.length.toString();
  listEl.innerHTML = "";
  const frag = document.createDocumentFragment();
  items.forEach(item => frag.appendChild(renderItem(item)));
  listEl.appendChild(frag);
}

/* item template */
function renderItem(item) {
  const wrap = document.createElement("div");
  wrap.className = "item";

  const main = document.createElement("div");
  main.className = "item-main";
  const urlEl = document.createElement("p");
  urlEl.className = "url";
  urlEl.textContent = item.url;
  main.appendChild(urlEl);

  const tags = document.createElement("div");
  tags.className = "tags";
  item.categories.forEach(c => {
    const t = document.createElement("span");
    t.className = "tag";
    t.textContent = c;
    tags.appendChild(t);
  });
  if (item.notes?.length) {
    const n = document.createElement("span");
    n.className = "note";
    n.textContent = item.notes.join(" • ");
    tags.appendChild(n);
  }
  main.appendChild(tags);

  const actions = document.createElement("div");
  actions.className = "item-actions";

  const open = document.createElement("button");
  open.className = "icon-btn secondary";
  open.textContent = "Open";
  open.addEventListener("click", () => window.open(item.url, "_blank", "noopener"));
  actions.appendChild(open);

  const copy = document.createElement("button");
  copy.className = "icon-btn";
  copy.textContent = "Copy";
  copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(item.url);
    flash(copy);
  });
  actions.appendChild(copy);

  wrap.appendChild(main);
  wrap.appendChild(actions);
  return wrap;
}

/* helpers */
function flash(btn) {
  const prev = btn.textContent;
  btn.textContent = "Copied";
  setTimeout(() => (btn.textContent = prev), 900);
}

/* bulk actions */
copyBtn.addEventListener("click", async () => {
  const text = getVisible().map(l => l.url).join("\n");
  if (!text) return;
  await navigator.clipboard.writeText(text);
  flash(copyBtn);
});

exportJsonBtn.addEventListener("click", () => {
  const data = getVisible();
  downloadBlob(JSON.stringify(data, null, 2), "proxies.json", "application/json");
});

exportCsvBtn.addEventListener("click", () => {
  const rows = [["url", "categories", "notes"]];
  getVisible().forEach(l => {
    rows.push([
      l.url,
      l.categories.join("|"),
      (l.notes || []).join("|")
    ]);
  });
  const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
  downloadBlob(csv, "proxies.csv", "text/csv");
});

function downloadBlob(content, filename, type) {
  const blob = new Blob([content], { type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

/* reset */
resetBtn.addEventListener("click", () => {
  activeCategories.clear();
  Array.from(filtersEl.querySelectorAll(".chip.active")).forEach(c => c.classList.remove("active"));
  searchEl.value = "";
  query = "";
  render();
});

/* search input */
let searchDebounce;
searchEl.addEventListener("input", (e) => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    query = e.target.value.trim();
    render();
  }, 120);
});

/* init */
renderChips();
render();

