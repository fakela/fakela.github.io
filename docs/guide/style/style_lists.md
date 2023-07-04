# Lists

Recommendations on formatting and using lists in your documentation.

## Bullet lists

Use a bullet list when the item order or sequence is not important or required to complete a process. You can also arrange bullet list items in:

- Alphabetical order if there's no specific importance or relationship among the listed items.
- A specific order if you want to imply relative importance or a relationship among the listed items.
- Ascending order by word count. This imparts a visually pleasing shape to a list block that makes it look clean and neat.

## Numbered lists

Use a numbered list when the item order or sequence is important or required to complete a process.

!!! Tip
    When using a numbered list to describe steps, you don't need to indicate sequence in your text. For example, avoid writing lists like this:
    
    > 1. First, complete process A.
    > 1. Next, activate process B.
    > 1. Third, click button C.
    
    Text that tells readers a step is "first," "second," "third," or "last," is unnecessary in an ordered list. Eliminate a word and let the numbers do that work for you.

## Formatting list text

When you want to use a list:

- Place a colon at the end of the text or sentence fragment that introduces a list. Here's an example:

    > The following reports are available:
    >    
    > - Report 1
    > - Report 2
    > - Report 3

- Start each list item with a capital letter. Use a lower case letter if that's the formal name of an item (e.g., iPad, eMail) or as required to maintain accuracy.

- Avoid creating a list that includes sentence fragments and complete sentences. It is OK to do this if there's no other way. Sometimes you just have to, but try not to.

- Do not create a list that has one bullet or numbered item only. If you're doing this to highlight something important, consider putting that text in a [note, tip, or warning call-out](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types) or an [expand/collapse block](https://squidfunk.github.io/mkdocs-material/reference/admonitions/?h=expand#collapsible-blocks). In technical writing, there's no such thing as a list with one bullet or numbered item. Lists _must_ include 2, or more, items.

## Simple or single-item lists

If your list is a simple enumeration of items that would normally create a single sentence, capitalize each list item and omit the punctuation. Here's an example:

>The pop-up window contains 3 buttons:
>
> * Save
> * Save all
> * Cancel

_Do not_ punctuate enumerated list items as if they're part of a sentence. Here's an example:

>The pop-up window contains 3 buttons:
>
> * Save,
> * Save all, and
> * Cancel.

## Lists with complete sentences

If your list items are complete sentences, follow the rules of capitalization, punctuation, and grammar. Here's an example:

>Before you activate a campaign:
>
> * Make sure that the creatives, line items, and insertion order are all active.
> * Verify that pixels are active and associated with the correct line items.
> * Add start and end dates to the line item.

## Nested lists

Nested lists are lists that contain bulleted or numbered sub-lists. In technical writing, nested lists are acceptable and often necessary. For example, as shown in [Task Documentation for Simple Procedures](../types/tasks_simple.md), sometimes you need a nested list to describe the options in a set of instructions like this:

> 1. Click **New Widget**. This opens the New Widget Window.
> 1. In the New Widget window:
    - Name your widget.
    - Identify the widget owner.
    - Choose an application type.
    - Write a brief description.
> 1. Click **Save**.

The bulleted items in step 2 are in an unordered, nested list. They're essential and helpful in this case.

### Formatting nested lists

TechDocs is built on [pymarkdown](https://pypi.org/project/Markdown/), which closely follows the [Markdown syntax for lists](https://www.markdownguide.org/basic-syntax/#lists-1).

To create a nested ordered or unordered list, just indent 4-spaces under a list item as shown in the following examples.

``` markdown
<!--- Ordered list with unordered, nested bullets --->

1. Numbered item
1. Numbered item
    - Bulleted item
    - Bulleted item
1. Numbered item
```

``` markdown
<!--- Unordered list with ordered, nested numbers --->

- Bulleted item
- Bulleted item
    1. Numbered item
    1. Numbered item
- Bulleted item
```

!!! Tip
    Indent paragraphs, images, and call-out boxes when you need to keep these objects aligned with your list items and text.

### Keep lists simple

Nested lists become awkward and difficult to read when they go beyond 2 or 3 levels deep. For example, this list is a clumsy way to convey information:

> 1. Do this.
> 1. Do that with some options:
    - Option 1
    - Option 2
        - Something else here.
        - And one more thing.
        - Don't forget this either.
            - Hey, we're here too.
            - Going even deeper.
            - This is getting awkward.
    - Option 3
> 1. Final item.

### Alternatives to nested lists

When you start to create deeply nested lists, stop for a moment and think about how you're trying to convey information. Lists with 3<sup>rd</sup>, 4<sup>th</sup>, or _N_<sup>th</sup> level nesting might not be an effective way to explain something or describe a procedure. Instead of a sub-list, try putting that information:

- In another H2 or H3 titled section on the the same page. You might even want to add an anchor link to connect the list item to the new section.

- On a new, separate page that you link to from the main list.

- In a call-out box or expand/collapse block under a list item.

These options give you room to write and eliminate the need to stuff text into an awkward set of nested lists.
