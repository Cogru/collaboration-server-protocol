---
title: Kick
---

Request sent when kicking a user out of the room.

```json
{
    "method": "room::kick",
    "username": "{username}",
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::kick",
    "username": "{target_username}",
    "admin": "{admin_username}",
    "message": "{target} has been kicked out by {admin}",
    "status": "success",
}
```

</details>
