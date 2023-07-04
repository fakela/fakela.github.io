# Update a Group {#update-group}

A `PUT` method to update a user group.

## Request

`PUT /api/v1/groups/`*`<groupId>`*

```
 {
    "name" : <string>,
    "description" : <string_may_be_null>,
 }
```

## Response

```
  {
    "groupId" : <integer>,
    "pid" : <integer>,
    "name" : <string>,
    "description" : <string_may_be_null>,
    "membershipCount" : <integer>,
    "wildcards" : <list of strings>,
    "users" : <list of user IDs>
  }
```
