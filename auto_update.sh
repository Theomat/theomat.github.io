
FOLDERS="assets/css assets/fonts assets/js assets/js/plugins assets/js/vendor _sass _includes assets/webfonts _sass/vendor/font-awesome"
FILES="Gemfile"
FILES=""
BASE_URL="https://raw.githubusercontent.com/academicpages/academicpages.github.io/master/"

function update(){
    path=$1
    if [ -f $path ]; then
        url=$BASE_URL/$path
        wget -q $url
        if [ $? = 0 ]; then
            mv $file $path
        fi
    fi
}



for folder in $FOLDERS; do
    echo $folder
    for file in $(ls $folder); do
        update $folder/$file
    done
done
for file in $FILES; do
    update $file
done