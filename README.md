<a href="#"><img align="right" src="./etc/logo.png" width="15%"></a>
# collaboration-server-protocol
> Defines a common protocol for collaboration servers

[![Build](https://github.com/Cogru/collaboration-server-protocol/actions/workflows/build.yml/badge.svg)](https://github.com/Cogru/collaboration-server-protocol/actions/workflows/build.yml)

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## 🔧 Development

This section describes how to make the website up and running.

You will need the following tools before setting up the project environment.

- [Node.js][]
- [Hugo][]
- [Go][]

Input these commands to set up the project.

```sh
# Clone this repostiory
$ git clone https://github.com/Cogru/collaboration-server-protocol

# Navigate to the project directory
$ cd collaboration-server-protocol

# Install all dependencies
$ npm install

# Run the web server
$ hugo server
```

Now you can open the browser with the url http://localhost:1313/.

## ⚜ License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]


<!-- Links -->

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

[language-server-protocol]: https://github.com/microsoft/language-server-protocol

[Node.js]: https://nodejs.org/
[Hugo]: https://gohugo.io/
[Go]: https://go.dev/
