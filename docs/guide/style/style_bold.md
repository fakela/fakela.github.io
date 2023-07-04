# Bold Text

## Common use - UI controls

Use **bold** formatting in text when describing a user interface (UI) elements or controls. This includes things like buttons, dropdown menu items, option buttons or boxes, or anything a user can click on or interact with.

## Other uses

You can also use bold text for:

- A word or phrase that starts a bullet list.

    !!! example "Example"
        - **Autoscaler**: A system that scales databases without human intervention.
        - **Backup Scheduler**: A system that creates automated daily backups. 

- Text in the first column of a table.

    !!! example "Example"
        | Element | Description |
        |---|---|
        | **Date** | yyyy-mm-dd format |
        |**Time** | hh\:mm:ss format |

## **Bold** vs _italics_ for emphasis or stress

Our preference is to use _italics_ to place stress, emphasis, or importance on a word or phrase. Don't use bold text for emphasis. 

!!! tip "Call-outs"
    If you think some text needs special attention, put that information in a call-out. Call-outs are text items like a "Tip", "Warning", "Note", or "Info" box. See the [Admonition extensions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types) for a list of supported call-out  types in MkDocs.

To sum up, italics should be limited/used to:

- Put emphasis or stress on important text.
- Introduce a new word or phrase (on first mention only).
- Represent a placeholder for unknown text or content. For example, "_See content TBD for more information_."
- As a style indicator for brief foreign language phrases, particularly Latin (e.g., _id est_, _exempli grata_, _inter alia_).

See also, [Italics](style_italics.md).

## Standards for reference

 These rules are based upon the [DITA standards for technical writing](https://www.xml.com/articles/2017/01/19/what-dita/). DITA is a set of rules for documentation types, content, and a XML library for tagging text. The DITA framework prefers bold text for content describing GUI/UI controls that users interact with. See the [DITA uicontrol specification](https://docs.oasis-open.org/dita/v1.2/os/spec/langref/uicontrol.html):

 >The user interface control (`<uicontrol>`) element is used to mark up names of buttons, entry fields, menu items, or other objects that allow the user to control the interface. . . . This element is part of the DITA user interface domain, a special set of DITA elements designed to document user interface tasks, concepts and reference information.

<!-- comment change to test a build -->
