#!/bin/bash
cp app/helpers/template.component.ts app/components/$1".component.ts"
sed -i -e  's/changeMe/'$1'/g' app/components/$1".component.ts"
sed -i -e  's/'$1'Component/'${1^}'Component/g' app/components/$1".component.ts"
touch app/templates/$1".component.html"
cp app/helpers/template.sass app/styles/sass/$1".component.sass"
echo "Component "$1" created"
