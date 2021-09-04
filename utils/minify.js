import { minify } from 'https://esm.sh/terser'


const DIST_DIR = 'dist/'

for (const file of Deno.readDirSync(DIST_DIR)) {
    if ( !(file.isFile && file.name.endsWith('.js')) )
        continue
    
    let jsReaded = Deno.readTextFileSync(DIST_DIR + file.name)
    let jsMinified = await minify(jsReaded);
    Deno.writeTextFileSync(DIST_DIR + file.name, jsMinified.code)
    
    console.log(`File "${file.name}" minified!`)
}
