# indexSite
**To start a new edit**
```
#!
git fetch —all [fetches any branches that someone else may have made]
git fetch —tags [fetches any tags that someone else may have made]
git checkout develop
git pul origin develop
git checkout -b {yourName-pageName} [Create a new branch under your edits]
* make changes *
git add {files you edited} / git add -A [add files you edited / add all changes]
git commit -m “message”
git pull origin {yourName-pageName}
git push origin {yourName-pageName} [pushes to working branch]
```

**For peer review**
```
#!
Create a pull request
From: your current branch
To: develop
Add other team members as reviewers
```