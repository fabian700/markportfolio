import { readFileSync, writeFileSync } from 'node:fs'

const siteUrl = new URL(process.env.URL)
const imageUrl = new URL(
  'georgina-mark-id-card.png',
  siteUrl.href.endsWith('/') ? siteUrl : `${siteUrl.href}/`,
)
const file = 'dist/index.html'
const html = readFileSync(file, 'utf8')
const ogUrlPattern = /<meta property="og:url" content="[^"]+" \/>/
const ogImagePattern = /<meta property="og:image" content="[^"]+" \/>/

if (!ogUrlPattern.test(html) || !ogImagePattern.test(html)) {
  throw new Error('Expected Open Graph URL tags in dist/index.html')
}

writeFileSync(
  file,
  html
    .replace(ogUrlPattern, `<meta property="og:url" content="${siteUrl.href}" />`)
    .replace(
      ogImagePattern,
      `<meta property="og:image" content="${imageUrl.href}" />`,
    ),
)
