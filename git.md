##Command line instructions

###Git global setup
git config --global user.name "moom"
git config --global user.email "junjihe@live.com"

###Create a new repository
git clone http://117.78.38.1/moom/ysh-front.git
cd ysh-front
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

###Existing folder
cd existing_folder
git init
git remote add origin http://117.78.38.1/moom/ysh-front.git
git add .
git commit -m "Initial commit"
git push -u origin master

###Existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin http://117.78.38.1/moom/ysh-front.git
git push -u origin --all
git push -u origin --tags
