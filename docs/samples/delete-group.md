# Delete a Group {#delete-groups}

A `DELETE` method to delete a user group and remove all members from that group.

## Request

`DELETE /api/v1/groups/<groupId>`

## Response

Returns `204 No Content` if successful. In case of conflict returns `409 Conflict`.
