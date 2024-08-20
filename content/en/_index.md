---
title: collaboration-server-protocol
---

{{< blocks/cover title="" image_anchor="top" >}}

<h1>Collaboration Server Protocol</h1>

<p class="mt-5">
The Collaboration Server Protocol (CSP) specifies the protocol used between an
editor or IDE and a server that offers collaboration features such as
interactive chat bubbles, parallel editing, and more. Unlike the
<a href="https://microsoft.github.io/language-server-protocol/">Language Server Protocol (LSP)</a>
, there is no need to implement the server based on the specific features of
each programming language. Instead, you implement the client to interact with
the pre-existing server, <a href="https://github.com/Cogru/cogru">Cogru</a>.
</p>

<p class="mt-5">
<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol/subscription" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch Cogru/collaboration-server-protocol on GitHub">Watch</a>
<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol/fork" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork Cogru/collaboration-server-protocol on GitHub">Fork</a>
<a class="github-button" href="https://github.com/Cogru/collaboration-server-protocol" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star Cogru/collaboration-server-protocol on GitHub">Star</a>

<a class="btn btn-lg  me-3" href="docs/get-started/">Get started <i class="fas fa-arrow-alt-circle-right ml-2"></i></a>
<a class="btn btn-lg" href="#">Contribute <i class="fas fa-pencil-alt ml-2"></i></a>
</p>

<!-- <br/> -->

<!-- {{% blocks/link-down color="info" %}} -->

{{< /blocks/cover >}}

<!-- Middle -->

{{% blocks/section color="white" %}}

<div class="w-10">
<h2>What is the Collaboration Server Protocol?</h2>

Varius duis at consectetur lorem donec massa sapien, faucibus et molestie ac, feugiat sed lectus vestibulum mattis? Sit amet justo donec enim diam, vulputate ut pharetra sit amet, aliquam id.
</div>

{{% /blocks/section %}}

<!-- Last -->

{{% blocks/section color="white" type="row" %}}

{{% blocks/feature icon="fa-gears" %}}
<h3 class="mb-3 "><a href="overview/">Overview</a></h2>
<div class="text-start">
The protocol defines the format of the messages sent using JSON-RPC between the development tool and the language server. LSIF defines a graph format to store information about programming artifacts.
 </div>
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-book" %}}
<h3 class="mb-3"><a href="docs/">Specification</a></h2>
<div class="text-start">
The latest version of the LSP specification is version 3.17. There is now also a specification for the upcoming language server index format (LSIF).
 </div>
{{% /blocks/feature %}}

{{% blocks/feature icon="fa-code-fork" %}}
<h3 class="mb-3"><a href="blog/">Implementations</a></h2>
<div class="text-start">
The LSP has been implemented for many languages and many development tools are integrating these language servers.
 </div>

{{% /blocks/feature %}}

{{% /blocks/section %}}


<!-- Links -->

<script async defer src="https://buttons.github.io/buttons.js"></script>
