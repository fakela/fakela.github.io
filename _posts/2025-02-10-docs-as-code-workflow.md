---
layout: post
title: "My Docs-as-Code Workflow: Tools and Lessons Learned"
date: 2025-02-10
---

After six years of writing technical documentation across different companies and platforms, I've settled into a workflow that works. It's not perfect, but it's repeatable and catches problems early.

Here's what it looks like.

## The stack

Every project is different, but the core tools stay the same:

- **Git and GitHub** for version control and reviews
- **Markdown** as the source format (occasionally MDX for interactive components)
- **Vale** for prose linting and style enforcement
- **A static site generator** like Docusaurus, Mintlify, or Nextra depending on the team's preference

The specific SSG matters less than having a consistent process around it.

## Writing in branches

I treat documentation changes the same way engineers treat code changes. Every update gets its own branch, goes through review, and merges through a pull request.

This isn't just process for the sake of process. It means:

- Changes are tracked and reversible
- Engineers can review technical accuracy before publishing
- Multiple writers can work in parallel without conflicts
- CI checks catch broken links and style violations automatically

## Linting with Vale

Vale is one of the most underused tools in technical writing. It checks your prose against configurable style rules. You can enforce things like:

- Avoiding passive voice
- Using consistent terminology (e.g., always "API key" instead of sometimes "API token")
- Flagging jargon or unnecessarily complex language
- Matching your company's style guide

I run Vale locally before pushing and also in CI as a required check.

## What I've learned

The biggest lesson is that the tooling is secondary to the process. You can write great docs in Google Docs if you have good review habits. And you can write terrible docs with the fanciest SSG if nobody reviews them.

The docs-as-code approach works because it plugs documentation into the same workflow engineers already use. It reduces friction. It makes docs a natural part of shipping, not a separate task that gets forgotten.

Start with the process. The tools will follow.
