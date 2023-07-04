# Overview

The overview section gives you extra room to write about your service or product. You can make it one page long or create a parent/child section that contains multiple pages. Length depends on how much information you want to provide. If you use an overview, organize it as the second top-level section in the table of contents (TOC) after the homepage. Overviews are optional parts of your Backstage documentation.

## When to use

You should consider adding an overview when:

- A service is too complex or contains subtle nuances that can't easily be described in the [summary section](home_outline.md#summary-section) of your homepage documentation.

- Your readers would benefit from a longer, high-level, strategic discussion about your service _and_ something that plunges them into a tactical deep dive about how things work. 

- You think it is important or helpful to your documentation.

## Contents and organization

An overview section tells your readers why you created a service and how it works. Length and the amount of detail depends on how much you want to write. At its core, an overview is a [concept document](../types/concepts.md). It should include text and visual elements appropriate for that type of content.

## Location

An overview is the “second chapter” in your documentation. Place it in the TOC after the homepage. To organize content properly, edit your `mkdocs.yml` file as shown below.

```yaml
nav:
  - Home: index.md
  - Overview: <file-path>/<file-name.md>
  - # Other sections here
```

!!! Tip
    For more information about the `mkdocs.yml` file and how it creates the TOC, see the Table of Contents Deep Dive <font color="red">LINK TBD</font>.

<!--
## Examples

Here are some Backstage sites that use an overview section to good effect. The section title can include more than just "Overview", but that single-word title is acceptable and sufficient.

??? example "User Behavior Instrumentation Overview"
    [embed: ubi](/docs/default/component/ubi-docs)

??? example "Overview (Backstage system overview)"
    [embed: backstage-overview](/docs/default/component/backstage)

??? example "Overview (Spotify Engineering Handbook)"
    [embed: eng-hbk](/docs/default/component/architecture)
-->
