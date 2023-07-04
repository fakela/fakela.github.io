# Create a Group {#create-group}

A `POST` method to create a new user group.

## Request

`POST /api/v1/groups/`

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
