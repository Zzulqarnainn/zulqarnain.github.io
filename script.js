(() => {
  'use strict';
  const paths = {
    it: {
      tab: 'tab-it', kicker: 'ROLE PATH / 01', title: 'IT Support & Technical Operations',
      summary: 'A technical foundation in operating systems, networking, hardware concepts, and cybersecurity fundamentals, supported by Cisco Networking Academy training and experience with technical documentation and digital workflows.',
      targets: ['IT Support Technician', 'Help Desk Support', 'Technical Support', 'Junior IT Operations'],
      skills: ['Windows 10/11', 'Windows Server fundamentals', 'Linux fundamentals', 'TCP/IP · DNS · DHCP', 'Network troubleshooting', 'Endpoint security', 'Technical documentation', 'Cisco Networking Academy'],
      evidence: '<strong>Evidence:</strong> Cisco Networking Academy training, technical/digital operations internship tasks, and two AI/ML projects that demonstrate structured technical work. These are not presented as professional IT support employment.',
      cv: 'cv/Zulqarnain_IT_Support_Technical_CV.docx', cvLabel: 'Download IT Support CV'
    },
    doc: {
      tab: 'tab-doc', kicker: 'ROLE PATH / 02', title: 'Document Control & Project Administration',
      summary: 'A documentation-focused profile built around records, information organization, report preparation, and careful handling of project information. Document-control concepts are presented as foundations; hands-on experience with specific EDMS platforms should be confirmed.',
      targets: ['Document Controller', 'Documentation Assistant', 'Project Administrator', 'Project Documentation Support'],
      skills: ['Document registers', 'Records management', 'Revision tracking concepts', 'Electronic filing', 'Document indexing', 'Report preparation', 'Microsoft Excel', 'Technical documentation'],
      evidence: '<strong>Evidence:</strong> IRABOT internship tasks included maintaining digital records and technical information, preparing reports, and updating documentation. The CV lists document-control concepts; it does not establish extensive professional use of Aconex or SharePoint.',
      cv: 'cv/Zulqarnain_Document_CV.docx', cvLabel: 'Download Document Control CV'
    },
    admin: {
      tab: 'tab-admin', kicker: 'ROLE PATH / 03', title: 'Administrative Support & Data Operations',
      summary: 'An organized support profile focused on data entry, records, documentation, report preparation, digital tools, and coordination. The experience combines internship-based information handling with creative support work.',
      targets: ['Administrative Assistant', 'Office Assistant', 'Data Entry Clerk', 'Data & Documentation Assistant'],
      skills: ['Data entry & organization', 'Data accuracy & verification', 'Report preparation', 'Records maintenance', 'Microsoft Excel', 'Word · PowerPoint · Outlook', 'Power BI', 'Team coordination'],
      evidence: '<strong>Evidence:</strong> IRABOT internship tasks included data processing, record organization, report preparation, and workflow coordination. Freelance creative support included preparing documents, presentations, and digital communication materials.',
      cv: 'cv/Zulqarnain_Admin_Assistant_CV(1).docx', cvLabel: 'Download Administrative CV'
    }
  };
  const tabs = Array.from(document.querySelectorAll('.role-tab'));
  const panel = document.getElementById('role-panel');
  const $ = id => document.getElementById(id);
  function setPath(key, focusPanel = false) {
    const item = paths[key];
    if (!item) return;
    tabs.forEach(tab => {
      const active = tab.dataset.path === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', item.tab);
    $('path-kicker').textContent = item.kicker;
    $('path-title').textContent = item.title;
    $('path-summary').textContent = item.summary;
    $('path-targets').replaceChildren(...item.targets.map(label => { const span = document.createElement('span'); span.textContent = label; return span; }));
    $('path-skills').replaceChildren(...item.skills.map(label => { const span = document.createElement('span'); span.textContent = label; return span; }));
    $('path-evidence').replaceChildren();
    const evidence = document.createElement('span');
    evidence.innerHTML = item.evidence; // Static, authored content only; no user-provided data is inserted.
    $('path-evidence').append(...evidence.childNodes);
    const cv = $('cv-download'); cv.href = item.cv; cv.textContent = item.cvLabel + ' ↓'; cv.setAttribute('download', '');
    if (focusPanel) panel.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setPath(tab.dataset.path));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault(); tabs[next].focus(); setPath(tabs[next].dataset.path);
    });
  });
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const themeIcon = document.querySelector('.theme-icon');
  themeToggle.addEventListener('click', () => {
    const light = document.body.classList.toggle('light-theme');
    themeLabel.textContent = light ? 'Dark' : 'Light';
    themeIcon.textContent = light ? '◐' : '☼';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', light ? '#e9eee5' : '#101715');
  });
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  function closeMenu() { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Open navigation'); }
  menuToggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open'); nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  setPath('it');
})();
