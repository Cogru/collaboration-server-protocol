---
title: Exit Room
---

Request sent when exiting the room.

```json
{
    "method": "room::exit",
    "username": "{username}",
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::exit",
    "message": "{username} has left the room",
    "username": "{username}",
    "status": "success",
}
```

</details>
