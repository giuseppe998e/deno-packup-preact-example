#!/usr/bin/env bash

MAIN_SCSS="src/css/app.scss" # Relative path

build() {
    mkdir dist 2> /dev/null || rm -rf dist/*
    sass --no-source-map -s compressed $MAIN_SCSS ${MAIN_SCSS%/*}/app.css
    packup build --static-dir src/static --dir-dist . src/index.html
    rm -rf ${MAIN_SCSS%/*}/app.css
}

serve() {
    build # Build source
    (cd dist && python3 -m http.server)
}

clean() {
    rm -rf dist/ 2> /dev/null
}

main() {
    case "$1" in
        "serve")
            serve
        ;;

        "clean")
            clean
        ;;
        
        *)
            build
        ;;
    esac
}

main $1
