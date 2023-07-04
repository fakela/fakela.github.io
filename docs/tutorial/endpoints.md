# Understanding Data Endpoints and Workflows

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

A _data endpoint_ is an entity that represents a collection of data.

A _data workflow_ (often called a _data pipeline_) reads input from data endpoints, applies transformations, and outputs new data endpoints. Workflows process data in batches that run once per scheduled interval, or in a streaming fashion that runs indefinitely.

## Use cases

Different workflows are suitable for different use cases. In this tutorial, we'll show you how to build a batch workflow. However, many of the concepts taught here remain the same regardless of workflow type. The following table lists and describes the common workflow templates and their related use cases.

|**Workflow template**|**Use case**|
|----|----|
|**Flyte Scio**|When you need to create computationally demanding and/or resource-intensive dataflow jobs.|
|**Flyte Python**|When you need to write a workflow using Python.|
|**DBeam**|When you want to export data from a SQL database to Google Cloud Storage (GCS).|
|**BigQuery Runner**|When you need to schedule a fully featured workflow running on BigQuery or when it's faster to calculate within BigQuery.|
|**BigQuery Load**|When you want to export GCS data to BigQuery.|

## Related topics

- [Flyte](https://flyte.org/)
- [DBeam](https://github.com/spotify/dbeam#readme)
