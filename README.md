# Next Apollo Demo

### Requirements

* [**Node.js**](https://nodejs.org/en/download/)
* [**Yarn**](https://yarnpkg.com/cli/install)


### Installation

##### Client
From the **`client`** folder:
```bash
yarn install
```
```bash
yarn run dev
```
The client should be at **`http://localhost:3000`** 

##### Server
From the **`server`** folder:
```bash
yarn install
```
```bash
yarn start
```
The server should be at **`http://localhost:5000/graphql`** 

#### New Features
The project was cloned from [**next-apollo-demo**](https://github.com/arunoda/next-apollo-demo) and has the following modifications:
* Next.js, React, Apollo GraphQL (and other) libraries updated to the latest version.
* Migrated to TypeScript.
* Code refactored and new queries added such as StreetAddress and URL.
* Function: **`reverse`**. Returns a given string backwards. The function is not used but has test cases associated.
* Function: **`shareUrl`**. Adds parameters to a URL (e.g. **`http://www.example.com/`** -> **`http://www.example.com/?utm_source=instagram`** ). The function is used to modify the URL that is retrieved from the query.

#### Testing
From the **`client`** folder:
```bash
yarn jest
```

Test cases can be found at **`client/__tests__`** and cover the functionality of:
* **`reverse`** 
* **`shareUrl`**