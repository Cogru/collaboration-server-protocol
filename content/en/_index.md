---
title: collaboration-server-protocol
---

{{< blocks/cover title="" image_anchor="top" >}}

<h1>Collaboration Server Protocol</h1>

<p class="mt-5">
The Language Server Protocol (LSP) defines the protocol used between an editor
or IDE and a language server that provides language features like auto complete,
go to definition, find all references etc. The goal of the Language Server Index
Format (LSIF, pronounced like "else if") is to support rich code navigation in
development tools or a Web UI without needing a local copy of the source code.
</p>

<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Cogru/collaboration-server-protocol on GitHub">Star</a>

{{< /blocks/cover >}}


{{% blocks/section color="white" %}}

<h2>What is the Language Server Protocol?</h2>

Adding features like auto complete, go to definition, or documentation on hover for a programming language takes significant effort. Traditionally this work had to be repeated for each development tool, as each tool provides different APIs for implementing the same feature.

A Language Server is meant to provide the language-specific smarts and communicate with development tools over a protocol that enables inter-process communication.

The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support multiple languages with minimal effort.

LSP is a win for both language providers and tooling vendors!

{{% /blocks/section %}}


{{% blocks/section color="white" type="row" %}}

{{% blocks/feature icon="fa-lightbulb" title="New chair metrics!" %}}
The Goldydocs UI now shows chair size metrics by default.

Please follow this space for updates!
{{% /blocks/feature %}}

{{% blocks/feature icon="fab fa-github" title="Contributions welcome!" url="https://github.com/google/docsy-example" %}}
We do a [Pull Request](https://github.com/google/docsy-example/pulls) contributions workflow on **GitHub**. New users are always welcome!
{{% /blocks/feature %}}

{{% blocks/feature icon="fab fa-twitter" title="Follow us on Twitter!" url="https://twitter.com/docsydocs" %}}
For announcement of latest features etc.
{{% /blocks/feature %}}

{{% /blocks/section %}}