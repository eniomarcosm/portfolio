# Portfólio — Énio Marcos Massingue

Site estático (HTML + CSS + JS, sem build) com modo claro/escuro.

## Editar
- **Projectos e competências:** arrays `PROJECTS` e `SKILLS` no topo de `script.js`.
- **Capturas de ecrã:** `assets/shots/*.webp` (1200×750).
- **Textos (sobre, contacto):** português em `index.html`; inglês no objecto `EN` em `script.js` (mesma chave `data-i18n`).
- **Idiomas:** botão PT/EN no topo. O idioma é escolhido pelo browser do visitante e pode ser forçado com `?lang=en` ou `?lang=pt` no link.
- Nos projectos e competências, textos traduzíveis usam `{ pt: '...', en: '...' }`.

## Ver localmente
Abra `index.html` no browser, ou: `npx serve .`

## Publicar
**Vercel:** `npx vercel` nesta pasta (Framework: *Other*, sem build command), ou importe o repositório em vercel.com/new.

**GitHub Pages:**
```bash
git init && git add . && git commit -m "Portfólio"
git branch -M main
git remote add origin https://github.com/<utilizador>/<utilizador>.github.io.git
git push -u origin main
```
Depois: *Settings → Pages → Deploy from branch → main / (root)*.
