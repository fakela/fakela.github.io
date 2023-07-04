# Getting Started

The getting started section provides information about how to start using your service. Also, make it a top-level section in your documentation, don't bury getting started information as a subsection with other content in a parent container. Make it easy for your readers to, well, get started with using your awesome feature or service.

## When to use

Include a "Getting Started" section in your documentation when you have a service or system that requires a multi-step configuration process. Basically, if your users need to do step 1, 2, 3, etc. before they can use whatever it is you've built, put that information in this section.

## Contents and organization

The getting started section should contain task documentation only. Task docs are procedures that provide step by step instructions on how to use the thing you're writing about. For information about task docs, see the _Technical Writing Handbook_ sections on:

- [Documentation for Simple Procedures](../types/tasks_simple.md)
- [Documentation for Complex Procedures](../types/tasks_complex.md) 

## Location

A "Getting Started" section is the either the second or third chapter in your documentation. For example, "Getting Started" is:

- The second chapter in your docs if you don't have an Overview section.
- The third chapter in your docs if you do have an "Overview" section (place it after the "Overview.")

 To organize content properly, edit your `mkdocs.yml` file as shown below.

```yaml
# This example doesn't have an "Overview" section.
nav:
  - Home: index.md
  - Getting Started: <file-path>/file-name.md>
```

```yaml
# This example has an "Overview" section.
nav:
  - Home: index.md
  - Overview: <file-path>/<file-name.md>
  - Getting Started: <file-path>/<file-name.md>
```

```yaml
# This example uses a parent container for multiple child docs.
nav:
  - Home: index.md
  - Overview: <file-path>/<file-name.md>
  - Getting Started:
    - Task 1: <file-path>/<file-name.md>
    - Task 2: <file-path>/<file-name.md>
```

!!! Tip
    For more information about the `mkdocs.yml` file and how it creates the TOC, see the Table of Contents Deep Dive <font color="red">LINK TBD</font>.

<!--
## Examples

Here's an example from the [Getting Started with Declarative Infra](https://backstage.spotify.net/docs/default/component/declarative-infra/guides/getting-started/) documentation.
    
![declarative-infra](../images/hbk_dinfra_start.png)
-->
