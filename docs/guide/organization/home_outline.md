# Homepage Outline and Section Summaries

Here’s an outline you can follow to create a basic documentation homepage. It tries to meet the goals discussed in [Homepage Theory and Purpose](home_theory.md). Take a moment to review that article if you haven't read it yet.

## Sections outlined

This outline shows you how to organize the major sections of your documentation homepage.

I. Page title<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A. Introduction or short description<br>
II. Summary<br>
III. Next steps<br>
IV. Contribute (optional)<br>
V. Help and support section<br>
VI. Related topics (optional)<br>

Except for the introduction/short description, you can use the outline headers as the titles of each section.

!!! Tip
    For a visual overview, see the [Homepage Quick Reference](home_reference.md).

## Sections described

Let’s take a look at the typical contents and formatting of each section in a homepage.

### Page title

A homepage title should include or suggest the name of your service, feature, or whatever it is you’re writing about. Good page tiles help readers determine if a page or section contains the information they're looking for. Here are some examples: 

- Implementing Apollo Services
- Working With gRPC
- Pipeline Orchestration With Flyte

### Introduction section

The introduction or short description immediately follows the page title. It should welcome the reader to your docs site and/or briefly summarize your service or page contents. Don’t try to write a complete explanation of your whole system in the introduction. Save that longer discussion for the summary section or another page.

<!-- 
!!! example "Example: Google Cloud Bigtable"
    [Google Cloud Bigtable](https://cloud.google.com/bigtable) (CBT or Bigtable) is a high-performance, cross-region, replicated, NoSQL database service for large analytical and operational workloads. It's ideal for services that experience a high volume of read/write requests and require low latency. Bigtable is similar to other storage products or services like HBase, Cassandra, or DynamoDB.
-->

Style elements for an introduction section include:

- Using an H1 `#` title case title for page titles (e.g. `# Implementing Apollo Services`).
- No section title. Let the page title start the short description. Just write your text.
- Complete, grammatically correct sentences.

### Summary section

The summary section should contain 1-3 paragraphs that provide just enough information to describe your service. If you don't use a summary on the homepage and still want to describe your service, put that text in a separate overview section.
    
Use an H2 `##` sentence case title for the section headers. Text like `## Summary` or `## Service overview` are good examples of section titles.

### Next steps section

What do you do after the introduction and summary? Well, you and your team are the subject matter experts. Put that knowledge to work and provide some recommendations for your readers. The "Next steps" section is your opportunity to guide people to information that you think is important. For instance:

- New users may want to know how to implement your system or how it works. In this case, referring them to getting started or overview content might be helpful.

- Experienced users might need help with a complex issue or question. Pointing them to a user guide, FAQ, or use cases could be another helpful link in this section.

Style elements for a next steps section include:

- Using an H2 `##` sentence case title for the section header (e.g.,`## Next steps`).
- A bullet list of links to helpful resources.
- Short summaries of the content you choose to highlight in this section.

### Contribute section

The contribution section describes how your readers can help improve your documentation or report errors. It is optional. 

Style elements for a contribution section include:

- Using an H2 `##` sentence case title for the section header (e.g.,`## Contribute`).
- A sentence, paragraph, or instructions that tell readers how to report bugs, issues, or lend a hand.

### Help and support section

After explaining to your readers who you are, what you do, and where to go next, provide contact information about the team that manages the service described in the documentation. Taking responsibility for your service documentation is essential. You wrote it, you own it.

Format this section as a simple bullet list that includes things like your Slack channels, group emails, Stack Overflow, or other resources.

Style elements include:

- Using an H2 `##` sentence case title for the section header (e.g., `## Help and support`)
- Contact information (e.g., Slack, gmail, Stack Overflow, etc.) in a bullet list. Link to these when you can.

    !!! tip "Stack Overflow Tip"
        If your company has its own instance of Stack Overflow, link to that resource and add code that automatically populates the **Tags** field with a tag related to your service (e.g. `https://mycompany.stackenterprise.co/questions/ask?tags=<add tag here>`).

### Related topics section

The related topics section comprises simple bullet list of links to other resources that are similar to the topics covered by the page you're on. Including a related topics section is a great way to connect readers with other parts of your documentation or external documentation. It optional.

Style elements include:

- Using an H2 `##` sentence case title for the section header (e.g., `## Related topics`, `Reference`, or `Further reading`).
- A simple bullet list of linked references. Don't use a bullet list if there's only 1 item. Just add that item under the title.

## Reference

For more information on page formatting, see the these sections :

- Page and Content Structure Quick Reference <font color="red">LINK TBD</FONT>
- Page Titles and Section Headers Deep Dive <font color="red">LINK TBD</FONT>

<!--Reference links -->

*[Flyte]: Workflow automation, see https://flyte.org/
*[Apollo]: For backend communication, see https://www.apollographql.com/docs/
*[gRPC]: An RPC framework, see https://grpc.io/
