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

<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol/subscription" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch Cogru/collaboration-server-protocol on GitHub">Watch</a>
<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol/fork" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork Cogru/collaboration-server-protocol on GitHub">Fork</a>
<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Cogru/collaboration-server-protocol on GitHub">Star</a>

<a class="btn btn-lg  me-3" href="overview/">Learn More</a>
<a class="btn btn-lg" href="docs/get-started/">Get started</a>

<p class="mt-5">
{{% blocks/link-down color="info" %}}
</p>

{{< /blocks/cover >}}


{{% blocks/section color="white" %}}

<h2>What is the Language Server Protocol?</h2>

Adding features like auto complete, go to definition, or documentation on hover for a programming language takes significant effort. Traditionally this work had to be repeated for each development tool, as each tool provides different APIs for implementing the same feature.

A Language Server is meant to provide the language-specific smarts and communicate with development tools over a protocol that enables inter-process communication.

The idea behind the Language Server Protocol (LSP) is to standardize the protocol for how such servers and development tools communicate. This way, a single Language Server can be re-used in multiple development tools, which in turn can support multiple languages with minimal effort.

LSP is a win for both language providers and tooling vendors!

{{% /blocks/section %}}


{{% blocks/section color="white" type="row" %}}

{{% blocks/feature icon="fa-gears" title="Overview" url="#" %}}
The protocol defines the format of the messages sent using JSON-RPC between the development tool and the language server. LSIF defines a graph format to store information about programming artifacts.
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-book" title="Specification" url="#" %}}
The latest version of the LSP specification is version 3.17. There is now also a specification for the upcoming language server index format (LSIF).
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-code-fork" title="Implementations" url="#" %}}
The LSP has been implemented for many languages and many development tools are integrating these language servers.
{{% /blocks/feature %}}

{{% /blocks/section %}}


<!-- Links -->

<script async defer src="https://buttons.github.io/buttons.js"></script>
