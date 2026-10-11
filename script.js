const roleData = {
  it: {
    code: "CAREER PATH / 01", mark: "IT", kicker: "SUPPORT · TROUBLESHOOTING · SYSTEMS",
    title: "Help people get back to work.",
    description: "Foundational knowledge across operating systems, networking, endpoint security, and user support, backed by Cisco Networking Academy training and digital-operations experience.",
    skills: ["Windows 10/11","Linux fundamentals","TCP/IP · DNS · DHCP","Network troubleshooting","Endpoint security","Technical documentation"],
    evidence: "Cisco Networking Academy coursework; YOLO monument detection and transaction fraud detection projects; internship support for digital records and operational tasks.",
    cv: "cv/Zulqarnain_IT_Support_Technical_CV.docx", download: "Download IT Support CV", tab: "tab-it", label: "IT Support"
  },
  doc: {
    code: "CAREER PATH / 02", mark: "DOC", kicker: "DOCUMENT CONTROL · PROJECT RECORDS · REVISION TRACKING",
    title: "Keep project information controlled and findable.",
    description: "A documentation-focused profile with experience organizing technical information and practical training in document registers, revision tracking, electronic filing, and simulated transmittals.",
    skills: ["Document registers","Revision & version control","Electronic filing","Document indexing","Records management","Excel tracking logs"],
    evidence: "Practical document-control training using a simulated register and transmittals, including submission, review, comment, approval, and resubmission tracking.",
    cv: "cv/Zulqarnain_Document_CV.docx", download: "Download Document Control CV", tab: "tab-doc", label: "Document Control"
  },
  admin: {
    code: "CAREER PATH / 03", mark: "OPS", kicker: "ADMINISTRATION · DATA · COORDINATION",
    title: "Make everyday operations run smoothly.",
    description: "Administrative support experience across digital records, data processing, document preparation, reporting, and team coordination, with additional experience creating client-facing documents and presentations.",
    skills: ["Data entry & management","Microsoft Word & Excel","Reports & presentations","File organization","Email & correspondence","Workflow coordination"],
    evidence: "Internship experience supporting records and daily workflows, plus freelance creative support involving client requirements, revisions, formatting, and delivery timelines.",
    cv: "cv/Zulqarnain_Admin_Assistant_CV(1).docx", download: "Download Administrative CV", tab: "tab-admin", label: "Administrative Support"
  }
};
const tabs = [...document.querySelectorAll(".role-tab")];
const fields = {
  code: document.getElementById("roleCode"),
  mark: document.getElementById("roleMark"),
  kicker: document.getElementById("roleKicker"),
  title: document.getElementById("roleTitle"),
  description: document.getElementById("roleDescription"),
  skills: document.getElementById("skillList"),
  evidence: document.getElementById("roleEvidence"),
  download: document.getElementById("cvDownload"),
  panel: document.getElementById("rolePanel")
};
function setRole(key) {
  const data = roleData[key];
  if (!data) return;
  tabs.forEach(tab => {
    const active = tab.dataset.role === key;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  fields.panel.setAttribute("aria-labelledby", data.tab);
  fields.code.textContent = data.code;
  fields.mark.textContent = data.mark;
  fields.kicker.textContent = data.kicker;
  fields.title.textContent = data.title;
  fields.description.textContent = data.description;
  fields.skills.replaceChildren(...data.skills.map(skill => {
    const el = document.createElement("span"); el.textContent = skill; return el;
  }));
  fields.evidence.textContent = data.evidence;
  fields.download.href = data.cv;
  fields.download.setAttribute("download", "");
  fields.download.innerHTML = `${data.download} <span>↓</span>`;
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => setRole(tab.dataset.role));
  tab.addEventListener("keydown", e => {
    if (!["ArrowDown","ArrowUp","Home","End"].includes(e.key)) return;
    e.preventDefault();
    let next = i;
    if (e.key === "ArrowDown") next = (i + 1) % tabs.length;
    if (e.key === "ArrowUp") next = (i - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    tabs[next].focus(); setRole(tabs[next].dataset.role);
  });
});
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  themeToggle.textContent = dark ? "☼" : "◐";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
setRole("it");
