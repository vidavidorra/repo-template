# Repository template

A template for creating new repositories.

- Commit style using [commitlint](https://commitlint.js.org/).
- Code formatting using [Prettier](https://prettier.io/).
- Version management using [**`semantic-release`**](https://semantic-release.gitbook.io/semantic-release/).
- Dependency management using [WhiteSource Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate).

---

[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen.svg?logo=renovatebot&logoColor&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![License](https://img.shields.io/github/license/vidavidorra/repo-template.svg?style=flat-square)](LICENSE.md)

<a name="toc"></a>

## Table of contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

This describes how to use this template, for which there are two options.

1. Create a new repository on GitHub and select `vidavidorra/repo-template` as _Repository template_.
2. Create a new empty repository on and merge this template.
   ```shell
   $ git commit --allow-empty -m 'chore: create HEAD'
   $ git remote add -t main upstream git@github.com:vidavidorra/repo-template.git
   $ export REPO_TEMPLATE_TAG="$(git -c 'versionsort.suffix=-' ls-remote --exit-code --refs --sort='version:refname' --tags upstream 'v*.*.*' | tail --lines=1 | cut --delimiter='/' --fields=3)"
   $ export REPO_TEMPLATE_COMMIT="$(git -c 'versionsort.suffix=-' ls-remote --exit-code --refs --sort='version:refname' --tags upstream 'v*.*.*' | tail --lines=1 | cut --characters=1-7)"
   $ git fetch --no-tags upstream tag "${REPO_TEMPLATE_TAG}"
   $ git merge --allow-unrelated-histories --squash "${REPO_TEMPLATE_TAG}"
   $ git commit --message "chore: initialise from vidavidorra/repo-template@${REPO_TEMPLATE_COMMIT} (${REPO_TEMPLATE_TAG})"
   $ git tag --delete "${REPO_TEMPLATE_TAG}"
   $ git remote remove upstream
   $ git push
   ```

## Usage

Work through the [checklist](docs/checklist.md) to setup the repository with this template.

## Documentation

Please refer to the [docs](docs), for the documentation.

## Contributing

Please [create an issue](https://github.com/vidavidorra/repo-template/issues/new/choose) if you have a bug report, feature proposal or question that does not yet exist.

Please give this project a star ⭐ if you like it and consider becoming a [sponsor](https://github.com/sponsors/jdbruijn) to support this project.

Please refer to the [contributing guide](https://github.com/vidavidorra/.github/blob/main/CONTRIBUTING.md) detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)
[![Code style](https://img.shields.io/badge/code_style-Prettier-ff69b4.svg?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)
[![Linting](https://img.shields.io/badge/linting-ESLint-lightgrey.svg?logo=eslint&style=flat-square)](https://eslint.org)
[![Lint commit messages](https://img.shields.io/github/workflow/status/vidavidorra/repo-template/Lint%20commit%20messages?logo=github&label=Lint%20commit%20messages&style=flat-square)](https://github.com/vidavidorra/repo-template/actions)
[![Build](https://img.shields.io/github/workflow/status/vidavidorra/repo-template/Build?logo=github&label=Build&style=flat-square)](https://github.com/vidavidorra/repo-template/actions)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/repo-template/security/) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2019-2020 Jeroen de Bruijn

<details><summary>License details.</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>
