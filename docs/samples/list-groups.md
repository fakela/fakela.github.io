# List Groups {#list-groups}

A `GET` method to list user groups.

## Request

`GET /api/v1/groups/`

## Response

```javascript
[
  { 
    "groupId" : <integer>,
    "pid" : <integer>,
    "name" : <string>,
    "description" : <string_may_be_null>,
    "membershipCount" : <integer>,
    "wildcards" : <list of strings>,
    "users" : <list of user IDs>
  }, ...
]
```
