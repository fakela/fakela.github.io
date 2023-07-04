# Delete Users in Bulk {#delete-users-bulk}

A `POST` method to delete multiple users in bulk.

## Request

`POST /api/v1/users/bulk-delete`

```javascript
{[<user_id_1>, <user_id_2>, ...]}
```

## Response

Returns `204 No Content` if successful. In case of conflict, returns `409 Conflict`.
