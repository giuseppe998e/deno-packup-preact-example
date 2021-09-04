import { minify } from 'https://esm.sh/terser'

const DIST_DIR = 'dist/'

for (const file of Deno.readDirSync(DIST_DIR)) {
    if ( file.isFile && file.name.endsWith('.js') ) {
        let filePath = DIST_DIR + file.name
        let jsReaded = Deno.readTextFileSync(filePath)
        let jsMinified = await minify(jsReaded)
        Deno.writeTextFileSync(filePath, jsMinified.code)

        console.log(`File "${file.name}" minified!`)
    }
}
