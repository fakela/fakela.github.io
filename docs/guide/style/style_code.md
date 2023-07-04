# Code Snippets and Blocks

Adding code samples to documentation can help improve reader understanding. This site supports the basic Markdown syntax for short code snippets or longer code blocks. It also uses the [CodeHilite extensions](https://python-markdown.github.io/extensions/code_hilite/) to support code-specific syntax coloration.

<!--
## Embed and update code automatically

The [Embedding Code]() feature lets you add code from a GHE repo into your documentation. And, when your GHE code changes, TechDocs updates your documentation automatically. This means no more obsolete code samples in your documentation!
-->

## Snippets

Add a single backquote/back-tick `` ` `` symbol before and after a small code segment to identify it as code or set it apart from regular text, like this:

Here's a `code_snippet` in a sentence.

## Blocks

To format a large, multi-line code block, add 3 backquote/back-tick marks ```` ``` ```` before and after a section you want to identify as code. You can also specify the code language after the tick marks to add syntax coloring to a sample.

Here's an example for an  HTML code block.

``` html linenums="1"
<form action="#" method="post">
    <div>
         <label for="name">Text Input:</label>
         <input type="text" name="name" id="name" value="" tabindex="1" />
    </div>

    <div>
         <h4>Radio Button Choice</h4>

         <label for="radio-choice-1">Choice 1</label>
         <input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" />

     <label for="radio-choice-2">Choice 2</label>
         <input type="radio" name="radio-choice-2" id="radio-choice-2" tabindex="3" value="choice-2" />
    </div>
```

Here's an example for a JavaScript code block.

```javascript linenums="1"
var File = function(url, object){
	File.list = Array.isArray(File.list)? File.list : [];
	File.progress = File.progress || 0;
	this.progress = 0;
	this.object = object;
	this.url = url;
};
```

