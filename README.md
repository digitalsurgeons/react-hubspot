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

## Project Overview

The React-Hubspot project contains the following important subdirectories and files:

```bash
react-hubspot/
|-- .babelrc
|-- .github/
|   |-- workflows/
|       |-- main.yml
|-- README.md
|-- package-lock.json
|-- package.json
|-- src/
|   |-- index.js
|   |-- useForm.js
```

* `src/index.js` has the main code for the React hooks.
* `src/useForm.js` has the code for the `useForm` hook.
* `.babelrc` has babel configurations.
* `.github/workflows/main.yml` publishes the package to npm.
* `package.json` has project metadata and scripts.
* `package-lock.json` has lockfile information.

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test your changes
5. Submit a pull request

### Contributors

* Adam Soffer ([@adamsoffer](https://github.com/adamsoffer))
* Digital Surgeons ([@digitalsurgeons](https://github.com/digitalsurgeons))

## License

This project is licensed under the ISC license. Please see the [LICENSE](LICENSE) file for more details.

## Acknowledgements

React-Hubspot uses the following libraries:

* `React`
* `Axios`
