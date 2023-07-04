# ADRs

As described in this blog post, ["Documenting Architecture Decisions"](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), an Architectural Decision Record (ADR) logs the important changes to your code and documents the consequences of that change.

## When to use

Add an ADR section to your documentation if you want to:

- Record the thinking and decision making process behind significant code or other changes.
- Create an archive that new squad-mates can review.

We often forget (or are unaware of) how code or a system got created and how it evolved to its current state. ADR documents become the history of your project. Better historical knowledge may help you understand the past, the present, and plan for the future.

## Contents and organization

The following table lists and defines the common sections in a typical architectural decision record.

| Section   | Description |
|-----------|-------------|
| **Date**         | The date a change or decision was reached.       |
| **Status**       | Classifies the state of an architectural decision (e.g., proposed, accepted, deprecated, superseded, etc.).|
| **Context**      | Describes the conditions, background, problems that prompted particular design decision.|
| **Decision**     | Describes the change, update, or fix itself in response to the context.|
| **Consequences** | Describes the outcome of a particular decision.|

## Location

Put your ADRs at the end of your documentation, after the FAQ section if used. To organize content properly, edit your `mkdocs.yml` file as shown below.

```yaml
nav:
  - Home: index.md
  - Overview: <file-path>/<file-name.md>
  - Getting Started: <file-path>/<file-name.md>
  - . . .
  - FAQs: <file-path>/<file-name.md>
  - ADRs: <file-path>/<file-name.md>
```

## ADR introduction page

Sometimes readers are not familiar with the ADR concept. As a result, it is helpful to start your ADR section with an introduction. Here's a template you can use to start an ADR section.

```markdown
# Introduction

Maintaining a record of design decisions helps provide historical context for developers and users who work with our service.

## Design

The documents in our archive follow the standards described in [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions), an external blog post.

## Record structure

The following table lists and defines the common sections in a typical architectural decision record.

| Section   | Description |
|-----------|-------------|
| **Date**         | The date a change or decision was reached.       |
| **Status**       | Classifies the state of an architectural decision (e.g., proposed, accepted, deprecated, superseded, etc.).|
| **Context**      | Describes the conditions, background, problems that prompted particular design decision.|
| **Decision**     | Describes the change, update, or fix itself in response to the context.|
| **Consequences** | Describes the outcome of a particular decision.|
```

<!--    
## ADR example

Here's an example: 

??? example "Shared Protocol Buffers"
    [embed: gRPC](/docs/default/component/grpc/architecture/decisions/0002-shared-protocol-buffers-for-schema-management/)
-->
