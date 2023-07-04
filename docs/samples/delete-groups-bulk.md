# Delete Groups in Bulk {#delete-groups-bulk}

A `DELETE` method to delete multiple groups in bulk and remove all members from that group.

## Request

`DELETE /api/v1/groups/bulk-delete`

## Response

Returns `204 No Content` if successful. In case of conflict returns `409 Conflict`.
