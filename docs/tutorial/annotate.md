# Annotating Data

![writing-sample](https://img.shields.io/badge/status-writing%20sample-brightgreen)

Annotations play an important role in data management. For example, annotations help:

- Identify datasets that contain personally identifiable information (PII).

- Data governance teams and systems apply the appropriate level of protection to datasets that contain PII.

See the [Data Access and Onboarding Introduction](../placeholder.md) for the most current information and an in-depth guide to this topic.

!!! note
    - This section requires _no action_. We have already annotated the data for you, but please make sure to review this information. It provides background context about data annotations.

    - You _must_ annotate your data when sharing it outside of your team.

## How to annotate

To annotate data, first determine if it contains PII or not (see [What is Personal Data](../placeholder.md) for guidance). If your data:

- _Does not_ contain PII, annotate it with `{ policy: { noPersonalData: true }}`

- Contains PII, annotate the field containing personal data with the correct semantic type. If your data contains `NARROW` or `STRICT` fields, you _must_ encrypt it. See the [Padlock Documentation](../placeholder.md) on encryption.

## Viewing annotated data

Search for `UserTrackCounts` in the `README.md` of your repository.  Follow the link that takes you to the `UserTrackCounts` Avro schema file, which should be already annotated.

Your dataset includes a `userId` field. The `userId` field is based on the `user_id` stored in the upstream dataset, [di.golden.path.Stream.days.v1.parquet](../placeholder.md). In turn, the `user_id` is derived from an anonymized Spotify user ID. As previous information suggests, these user ID fields contain sensitive PII that require annotations. See also, the [Personal Data Semantic Type Policy](../placeholder.md) spreadsheet. It contains a comprehensive set of fields and their related annotation requirements.
