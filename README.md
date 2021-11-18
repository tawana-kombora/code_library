# Code Library
## Holding all the reusable bits of code I write, for furture use!


## Create a new repository on the command line
 
echo "# Code_Library" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:tawana-kombora/Code_Library.git
git push -u origin main
 
## Push an existing repository from the command line
 
git remote add origin git@github.com:tawana-kombora/Code_Library.git
<!-- optional (use if you don't have a default <git config --global init.defaultBranch main>):
 git branch -M main --> 
git push -u origin main