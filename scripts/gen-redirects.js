import { readdirSync, statSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const redirect = (to) =>
  `<!doctype html><html><head><meta charset="utf-8"><link rel="canonical" href="${to}"><meta http-equiv="refresh" content="0;url=${to}"><script>location.replace("${to}")</script></head></html>`

const processDir = (dir, urlBase) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory() && existsSync(join(fullPath, 'index.html'))) {
      const url = `${urlBase}/${entry}/`
      writeFileSync(join(dir, `${entry}.html`), redirect(url))
      processDir(fullPath, url.slice(0, -1))
    }
  }
}

processDir('dist', '')
console.log('✓ Generated .html redirect files for flat paths')
