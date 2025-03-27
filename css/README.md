# Git Commands
Git is an open surce distrinted version control system.

## Table of content
- [The Stages of git](The-Stages-of-git)
- [The Commands](The=Commands)
- [Initializing a Repo](Initializing-a-Repo)
- [Checking the status of our files](Checking-the-status-of-our-files)



## The stages of git
https://tinyurl.com/2j8w5e6h

- The Workspace : This is where unstaged files are located
- The Staging Area : This is where files go to after they have been staged
- The Commit/Local Rep : This is Where the commited files are saved as aversion
- The Remote Repo : This is where the pushed local repo are stored remotely

## The Commands
### Initialized a Repo
To initialized  a repo for an exixting project,
- navigate to the working dir of the project ou want to initialize  and use the command `git init`
```sh
cd <project-di>

```
- Create a repo on github and use the command `git clone` to clone the repo locally and begin your project
```sh
git clone <repo-url>
```

### Checking the status of our files
To check the staus of your files, you use command `git status`, this will show you if your files are untracked, stages and ready for committing
```sh
git status
```

### Commiting of the files
To commit all files we use the command `git commit`, it will commit your files to github.
```sh
git commit -m "commit to the website"
```
### Connecting to a Remote Repo
- `git remote add origin <repository-url>`: Connects your local repository to a remote repository. You only need to do this once per project.

```sh
git remote add origin https://github.com/username/repository-name.git
```
### Pushing Changes
- `git push -u origin <branch-name>`: Uploads your commits from your local repository to the remote repository. The `-u` flag sets the upstream branch, so you only need to use it the first time you push a branch.

```sh
git push -u origin main # Push the 'main' branch to the remote repository
```
**Note:**
 - The branch name is usually `main` or `master`.
 - The `origin` is the name of the remote repository.

###  Pulling Changes
- `git pull origin <branch-name>`: Downloads changes from the remote repository and merges them into your local branch.

```sh
 git pull origin main # Pull the 'main' branch from the remote repository
 ```

### Branching
- `git branch`: List all the branches in your local repository.
```sh
git branch
```
- `git branch <branch-name>`: Create a new branch.
 ```sh
git branch feature/new-login
```
- `git checkout <branch-name>`: Switch to a different branch.
```sh
git checkout feature/new-login
```
- `git checkout -b <branch-name>`: Create and switch to a new branch.
```sh
git checkout -b feature/new-login
```
- `git merge <branch-name>`: Merge a branch into the current branch.
```sh
git merge feature/new-login
```
**This line was modified**

 
