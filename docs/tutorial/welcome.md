# Introduction and Welcome

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

Hello friends! Welcome to an early version of the revised Data Engineering Golden Path. The concepts, examples, and lessons in this tutorial will teach you how to publish a production-grade data endpoint via a batch data workflow (pipeline).

!!! warning "Alpha release"
    This tutorial is in alpha and subject to change after user testing. It is designed as an eventual replacement for the batch workflow content in the Data Engineering Golden Path. Currently, this release excludes some topics that would bring it to parity with that golden path. These include:

    - Counters
    - Reading from and writing to BigQuery
    - ITGC

??? info "What is a golden path?"
    A golden path tutorial introduces you to a topic and our company-specific ways to do something. It is not the full documentation for a particular subject. Instead, a golden path touches briefly on each tool and task, and does just enough to establish the basic, opinionated, and optimal way of working.

<!--
    
## Understanding data endpoints and workflows

A _data endpoint_ is an entity representing a collection of data.

A _data workflow_ (often called a _data pipeline_) typically reads input data endpoints, applies transformations, and outputs new data endpoints. Workflows process data in batches that run once per scheduled interval, or in a streaming fashion that runs indefinitely.

## Use cases

Different workflows are suitable for different use cases. In this tutorial, we'll show you how to build a batch workflow. However, many of the concepts taught here remain the same regardless of workflow type. The following table lists and describes the common workflow templates and their related use cases.

|**Workflow template**|**Use case**|
|----|----|
|**Flyte Scio**|When you need to create computationally demanding and/or resource-intensive Dataflow jobs.|
|**Flyte Python**|When you need to write a workflow using Python.|
|**DBeam**|When you want to export data from a SQL database to Google Cloud Storage (GCS).|
|**BigQuery Runner**|When you need to schedule a fully featured workflow running on BigQuery or when it's faster to calculate within BigQuery. See the LINK NOT AVAILABLE of the BigQuery FAQ for recommendations about when to use BQ Runner instead of Scio.|
|**BigQuery Load**|When you want to export GCS data to BigQuery.|
-->

## Who should use this tutorial

This tutorial is designed for:

- New engineers who need to get up to speed with concepts and ways of working with batch data workflows.

- Employees changing roles within the company and who need to create and manage batch data workflows.

- Anyone looking for information on how to create and manage batch data workflows or who are curious about how it all works. 

## How to use this tutorial

- New engineers should start at the beginning and work sequentially through each part and lesson to the end.

- Engineers with experience building workflows are also encouraged to follow the same beginning-to-end sequence as new engineers. If you have previous knowledge, then a more targeted approach might suit your learning style and experience, but we encourage you to work through this tutorial systematically.

As you work through the Data Engineering Shiny Path, keep in mind that it introduces you to our data tooling. Again, this isn't the full documentation for those tools. This is just enough to get you started.

!!! note
    Each section in this shiny path builds upon the concepts and lessons learned in the previous sections. Skipping lessons might mean you're bypassing critical information or the required part of a learning exercise that spans multiple sections.

## Contribute

Open a GHE issue to leave feedback or report an error. We appreciate your input and rely on the community to help us fix confusing or inaccurate content.

Our GHE repository is LINK TO GHE REPO HERE.

## Help and support

BOILERPLATE HELP TEXT TBD HERE.
