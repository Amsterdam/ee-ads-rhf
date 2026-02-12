# How to create a release

1. Locally merge the latest version of `develop` into `main` using a fast-forward merge, and push to the remote:

   ```sh
     git checkout main
     git pull
     git merge --ff-only origin/develop
     git push
   ```

2. This triggers a GitHub Action, which creates a release PR.
   The same Action will then publish the release to npm and GitHub.
   It also deploys the released version to our main Storybook environment.

3. After merging and the Action completing, the Action adds a new release commit to `main`.
   Locally merge this commit back into `develop` and push it to the remote:

   ```sh
    git checkout develop
    git pull
    git merge --ff-only origin/main
    git push
   ```
