# sdl_validator

## Table of Contents
1. [Introduction](#1-introduction)
2. [Installation](#2-installation)
3. [Usage](#3-usage)
4. [Features](#4-features)
5. [API Reference](#5-api-reference)
6. [Examples](#6-examples)
7. [License](#7-license)
8. [Support](#8-support)

---

## 1. Introduction

`sdl_validator` is an npm package designed to validate surveys created with the Survey Definition Language (SDL). It helps in ensuring that SDL-based surveys are correctly structured and follow the specified SDL schema. This tool is vital for developers and researchers who use SDL to create and manage surveys.

---

## 2. Installation

To install `sdl_validator`, run the following command in your project directory:

```bash
npm install sdl_validator
```

This command will add `sdl_validator` to your project's dependencies.

---

## 3. Usage

After installation, you can use `sdl_validator` in your project like this:

```javascript
const sdlValidator = require('sdl_validator');

let survey = {}; // your SDL survey object
let validationResult = sdlValidator.validate(survey);

if (validationResult.isValid) {
    console.log("Survey is valid!");
} else {
    console.error("Survey validation failed:", validationResult.errors);
}
```

---

## 4. Features

- **Validation of SDL Surveys:** Ensures that your surveys are compliant with the SDL schema.
- **Error Reporting:** Provides detailed error reports to help you identify and fix issues.
- **Easy Integration:** Can be easily integrated into your existing JavaScript projects.

---

## 5. API Reference

- `validate(surveyObject)`: Validates an SDL survey object and returns a validation result.
  - `surveyObject`: The SDL survey object to be validated.
  - Returns an object with `isValid` (boolean) and `errors` (array of error messages).

---

## 6. Examples

Below is an example of how to use `sdl_validator` to validate a simple SDL survey object.

```javascript
const sdlValidator = require('sdl_validator');

let survey = {
    // SDL survey object
};

let result = sdlValidator.validate(survey);

if (result.isValid) {
    console.log("Survey is valid.");
} else {
    console.error("Validation errors:", result.errors);
}
```

---

## 7. License

`sdl_validator` is licensed under the [MIT License](LICENSE).

---

## 8. Support

For support and queries, please open an issue on the [GitHub repository issues page](https://github.com/your-github/sdl_validator/issues).

---