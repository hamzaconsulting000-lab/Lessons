# Lessons
Just learning
//                                                        Github
Commands :

Clone - to clone a repository on our local media
    git clone <-some link->

status - display the status of the code
    git status
    types of status{

        untracked - new files that git doesn't yet track

        modified - changed

        staged - file is ready to be committed

        ummodified - unchanged
    }

Add - adds a new or changed files in your working directory to the git staging area
    git add <-file name->

Commit - it is the record of changes
    git commit -m "some msg"

Push - uploads local repo                    (PC/Laptop repositories) content to remote repo(git repositories)
    git push origin <-branch name->




Init - used to create a new git repo
    git init
    git remote add origin <- link ->
    git remote -v                            (to verify remote)
    git push -u origin <-branch name->       (-u allows you to push in that same repo with typing its name over and over again)

Branch commands
    git branch                               (to check branch)
    git branch -M "main"                     (to rename branch)
                    |
                    |_ _ _{the name you want to set}
    git checkout <- branch name ->           (to navigate)
    git checkout -b <- new branch name->     (to create new branch)
    git branch -d <- branch name ->          (to delete a branch) 

Merging command
    git diff <-branch name->                 (to compare commits, files, branches & more)
    git merge <-branch name->                (to ,erge 2 branches)

    or

    create a pr [Pull request]
    git pull origin <-branch name->