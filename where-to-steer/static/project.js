document.getElementById('copy').addEventListener('click', async () => {
 const status = document.getElementById('copy-status');
 try { await navigator.clipboard.writeText(document.getElementById('bibtex').textContent); status.textContent = 'BibTeX copied.'; }
 catch { status.textContent = 'Copy unavailable. Select and copy the citation above.'; }
});
