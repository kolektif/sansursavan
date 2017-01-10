#!/bin/bash

mkdir sansursavan-package
cp -R icons sansursavan-package/icons
cp js/background.js sansursavan-package/js/background.js
cp LICENSE sansursavan-package/LICENSE
cp manifest.json sansursavan-package/manifest.json
cp popup.html sansursavan-package/popup.html
cp welcome.html sansursavan-package/welcome.html
cp redirect.html sansursavan-package/redirect.html
cp proxy.html sansursavan-package/proxy.html
cp js/redirect.js sansursavan-package/js/redirect.js
echo $(web-ext build -s ./sansursavan-package)
rm -rf sansursavan-package
