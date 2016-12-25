#!/bin/bash

mkdir sansursavan-package
cp -R icons sansursavan-package/icons
cp background.js sansursavan-package/background.js
cp LICENSE sansursavan-package/LICENSE
cp manifest.json sansursavan-package/manifest.json
cp welcome.html sansursavan-package/welcome.html
cp redirect.html sansursavan-package/redirect.html
cp proxy.html sansursavan-package/proxy.html
cp redirect.js sansursavan-package/redirect.js
echo $(web-ext build -s ./sansursavan-package)
rm -rf sansursavan-package
