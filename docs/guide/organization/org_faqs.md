# FAQs

Frequently asked questions (FAQ) provide answers to common questions.

## When to use

Create a FAQ if you start to get a lot similar questions over and over again. Or, you could create a FAQ to anticipate possible questions.

!!! tip "Use Stack as a FAQ"
    Consider replacing the FAQ with Stack Overflow. For example, you could put some text on your homepage or FAQ page that encourages people to ask and answer questions on Stack Overflow. This transforms a static question and answer format into a dynamic Stack Overflow conversations with your users. For example, you could do something like this on a page:

    ```html
    [Post a question](https://company_name.stackenterprise.co/questions/ask?tags=<insert tag here>) or search for answers on Stack Overflow. Use "<insert tag here>" as your Stack tag for questions or searches.
    ```

## Contents and organization

A FAQ consists of text arranged in a question and answer format. 

- Format your questions as H2 or H3 headers. This makes them easy to scan and more visible than plain text. Also, TechDocs uses the headers to create a page-level table of contents that appears on the right side of the screen.

- Write your answers in plain text below the question. For style points, indent the answer several spaces under the question header. This makes each question/answer pair look like a unified block separate from the other entries.

## Location

The FAQ is one of the last chapters in you'll write. It belongs at or near the end of your documentation space.

To organize content properly, edit your `mkdocs.yml` file as shown below.

```yaml
nav:
  - Home: index.md
  - Overview: <file-path>/<file-name.md>
  - Getting Started: <file-path>/<file-name.md>
  - . . .
  - FAQs: <file-path>/<file-name.md>
```

<!--
## Example

Here's an example:

??? example "Fleet Management FAQ"
    [embed: edge-fleet-faq](/docs/default/component/fleet-management/fleet-wide-refactoring/FAQ)
-->
