# React-Hubspot

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Build Status](https://travis-ci.com/adamsoffer/react-hubspot.svg?branch=master)
![npm version](https://img.shields.io/npm/v/react-hubspot)

React-Hubspot is a collection of React hooks for interacting with Hubspot APIs.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Project Overview](#project-overview)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)

## Installation

To install React-Hubspot, use npm package manager:

```sh
npm install @digitalsurgeons/react-hubspot
```

This command will also install the required dependencies (`react` and `axios`) specified in package.json file.

## Usage

### Basic

```jsx
import React from 'react';
import { useForm } from '@digitalsurgeons/react-hubspot'

function App() {
  const { data, isLoading, isError, handleSubmit } = useForm({
    portalId: '<PORTAL_ID>',
    formId: '<FORM_ID>'
  })

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="text" placeholder="email" />
    </form>
  );
}

export default App;
```

### With Hubspot Tracking

By default, this component does not Hubspot tracking enabled. To enable Hubspot tracking, set the `enableCookieTracking` option to `true`.

```jsx
const { data, isLoading, isError, handleSubmit } = useForm({
  portalId: '<PORTAL_ID>',
  formId: '<FORM_ID>',
  enableCookieTracking: true
})
```

## Project Overview

The React-Hubspot project contains the following important subdirectories and files:

```bash
react-hubspot/
|-- .babelrc
|-- .github/
|   |-- workflows/
|       |-- main.yml
|-- README.md
|-- package.json
|-- yarn.lock
|-- src/
|   |-- index.js
|   |-- useForm.js
|-- dist/
|   |-- index.js
|   |-- useForm.js
```

* `src/index.js` - main code for the React hooks.
* `src/useForm.js` - `useForm` hook.
* `.babelrc` - Babel configurations for supporting ES6+.
* `.github/workflows/main.yml` - GitHub Action to publish NPM when tags are pushed to /main.
* `package.json` - project metadata and scripts.
* `yarn.lock` - the exact versions of the dependencies installed.

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository

```sh
gh repo clone digitalsurgeons/react-hubspot
```

2. Set up the project

```sh
yarn
```

3. Create a new branch using git flow

```sh
# If you haven't installed git flow, run the following command:
brew install git-flow
# If you haven't initialized git flow, run the following command:
git flow init
# Create a new branch
git flow feature start <feature-name>
```

4. Make your changes
5. Test your changes
6. Lint your changes

```sh
yarn lint
```

6. Submit a pull request

```sh
gh pr create
```

### Contributors

* Adam Soffer ([@adamsoffer](https://github.com/adamsoffer))
* Digital Surgeons ([@digitalsurgeons](https://github.com/digitalsurgeons))

## License

This project is licensed under the ISC license. Please see the [LICENSE](LICENSE) file for more details.

## Acknowledgements

React-Hubspot uses the following libraries:

* `React`
* `Axios`
