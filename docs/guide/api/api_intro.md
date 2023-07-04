# API Documentation Style Guide

API descriptions should be consistent across and within methods. Flexibility and creativity are good, but we're going to be strict here. Review this section for rules and examples that can help you write clear, concise API descriptions.

## Style basics

When writing API documentation, try to:

- Write in the present tense and in the [active voice](https://www.plainlanguage.gov/guidelines/conversational/use-active-voice/). Present-tense, active-voice writing is strong and confident.

- Start descriptions with a verb in the [imperative mood]( https://en.wikipedia.org/wiki/Imperative_mood) (e.g., create, update, save, build, push, etc).

- Describe what each method does right away. Don't waste time with background content or context.

- Create and link to separate, but related, content when API features are too complicated to explain in a few short sentences.

## Description structure

These recommendations follow a [Swagger](https://swagger.io/) type structure for API development and documentation. Specific keys or parameters may not match the tools you're using, but the writing concepts presented here should be applicable across different API development platforms.

### First sentence

The first sentence of an API description concisely describes the function of a particular method. In your text:

- Use the `summary` parameter.
- Add more information or links with the `description` parameter.
- Limit the main description to a single sentence only!
- Start with a verb in the imperative as shown in the examples below.

### Subsequent sentences or supporting text

Supporting text provides more information and links about a method. Use the `description` parameter to identify this text.

### Example

``` text
/section/section:
    method:
        summary: "Some text here."
        description: "Even more text here."
```

## Verbs for method descriptions

Usually, repetition in writing is bad and tedious. In the case of API docs, repetition, or, perhaps more accurately, _consistency_, is your friend. As we're writing about a limited set of commands, it's good to have the description for each command start with the same word. So, try to be consistent in how you start method descriptions.

- Each description for a method type (`POST`, `GET`, `DELETE`, `PUT`, etc.) should have it's own verb.

- Start the description with the verb that matches the method.
- Use a verb in the imperative like this:  "returns," "deletes," "creates," "tests," etc. See the method descriptions below.

If these don't work it's OK to try something else. Whatever you do, just be consistent in doing it.

## Verb cheat sheet

These are the recommended verbs you should use to start method descriptions. See also the examples in the next section below.

<table>
    <tr>
        <th>Method</th>
        <th>Verb</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>Returns</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>Deletes</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>POST methods can do a lot of different things. Try to match the verb to the action the method performs. Here are some examples:
        <ul>
            <li>Creates</li>
            <li>Deletes</li>
            <li>Tests</li>
            <li>Returns</li>
            <li>Moves</li>
        </ul>
        </td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>PUT methods can do a lot of different things. Try to match the verb to the action the method performs. Here are some examples:
        <ul>
            <li>Specifies</li>
            <li>Updates</li>
            <li>Appends</li>
        </ul>
        </td>
    </tr>
</table>

## Description examples

Here are some pseudo-code examples to help you get started.

### DELETE methods

For single or bulk-delete methods, start the description with the word "Delete."

``` txt
/segments/ic:{integration code}:
    delete:
        summary: "Deletes a specific segment by integration code."
```

### GET methods

Start the description with the word "Returns."

``` txt
/traits/:
    get:
        summary: "Returns data for an algorithmic, on-boarded, or rules-based trait."
```

### POST methods

POST methods can do various things. The verbs and ways to describe these can vary, but this behavior still lends itself to writing descriptions with a fixed set of verbs and terms. Refer to these examples when writing descriptions for POST methods.

!!! Tip
    When writing POST descriptions, try to start with a verb that most closely describes what the method does.

**Create example**

```txt
/traits/:
    post:
        summary: "Creates a trait that defines part of an audience segment."
```

**Bulk delete example**

```txt
/segments/bulk-delete:
    post:
        summary: "Deletes multiple segments with a single operation."
```

**Test or validate**

```txt
/traits/validate:
    post:
        summary: "Tests the rule logic applied to a rules-based trait."
```

**Return data**

```txt
//The POST method returns data like a GET method.
  
/segments/estimate-size:
    post:
        summary: "Returns the total estimated segment size for 7-, 30-, and 60-day intervals."
```

**Moving objects**

```txt
/segments/bulk-replace:
    post:
        summary: "Moves audiences in bulk from one segment to another."
```

### PUT methods

PUT methods can do a variety of things like POST methods. The verbs and ways to describe these can vary, but this behavior still lends itself to writing descriptions with a fixed set of verbs and terms. Refer to these examples when writing descriptions for PUT methods.

!!! Tip
    When writing PUT descriptions, try to start with a verb that most closely describes what the method does.

**Select or specify**

```txt
/folders/audiences/{folderId}:
    put:
        summary: "Specifies a an audience folder ID to update with a new name, description, or move it to another location."
```

**Update or revise**

```txt
/audience/{aid}:
    put:
        summary: "Updates a specific audince by audience ID."
```

```txt
/segments/ic:{integration code}:
    put:
        summary: "Appends an integration code to a request to revise the audience name or description."
```
<!--
## API Documentation and Backstage

API discoverability and API documentation in Backstage is very limited. For information about the current situation, see the Google doc [API discoverability and Backstage][5].
-->

<!-- Reference links

[1]: "imperative mood"
[2]: ../style/hbk_style_tense.md "tense"
[3]: https://www.grammarly.com/blog/active-vs-passive-voice/ "active voice"
[4]: https://swagger.io/ "swagger"
[5]: https://docs.google.com/document/d/1mThzOY73VZBQnMR1cDBarnyB4RPTLqTwqdWvBAmN5zM/edit?usp=sharing "API doc status"
-->