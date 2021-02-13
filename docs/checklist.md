# Setup

After a new repository using this template has been created, make the following changes.

1. Remove files containing content of the template.
   ```shell
   $ rm CHANGELOG.md
   ```
2. Create a temporary checklist and replace the readme with the example.
   ```shell
   $ mv README.md CHECKLIST.md
   $ mv README.example.md README.md
   ```
3. Go through the [checklist](#checklist).
4. Remove the temporary checklist.
   ```shell
   $ rm CHECKLIST.md
   ```

# Checklist

Go through this checklist after creating your repository. It should only take a couple of minutes.

## README.md

- [ ] Is the `<title>` field correct?
- [ ] Is the `<description>` field correct?
- [ ] Are the `<repo-name>` fields correct?
- [ ] Is the date (range) of the license correct?

## `package.json`

- [ ] Is the `name` field correct?
- [ ] Is the `description` field correct?
- [ ] Is the `version` field correct?  
       Use `npm version 0.1.0 --git-tag-version=false` to set the version, `0.1.0` in this example.
- [ ] Is the `author` field correct?
- [ ] Have you added `keywords`?
- [ ] Are the `repository.url`, `bugs` and `homepage` links correct?

## `package-lock.json`

- [ ] Is the `name` field correct?
- [ ] Is the `version` field correct?

## Renovate

- [ ] Is the Renovate GitHub App enabled on this repository?  
       Settings can be found in the _Installed GitHub Apps_ secion of the GitHub _Organization settings_ or in the _Applications_ section of the GitHub _Personal settings_. Add the repository to the list of selected repositories.

## GitHub settings

**Options**

- [ ] Is the _Wikis_ option disabled?
- [ ] Is the _Allow merge commits_ merge option disabled?
- [ ] Is the _Allow squash merging_ merge option enabled?
- [ ] Is the _Allow rebase merging_ merge option disabled?
- [ ] Is _Automatically delete head branches_ enabled?

**Branches**

- [ ] Are _Branch protection rules_ added on the `main` branch?

## Language setup

## Typescript

- [ ] Is there a `tsconfig.json` file?  
       See [vidavidorra/commitlint-config](https://github.com/vidavidorra/commitlint-config) for an example of the file.
