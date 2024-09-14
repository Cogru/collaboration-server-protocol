---
title: room::kick
---

Request sent when kicking a user out of the room.

```json
{
    "method": "room::kick",
    "username": <string>,
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::kick",
    "username": <string>,
    "admin": <string>,
    "message": <string>,
    "status": "success",
}
```

</details>
