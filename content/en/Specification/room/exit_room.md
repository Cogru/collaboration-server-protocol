---
title: room::exit
---

Request sent when exiting the room.

```json
{
    "method": "room::exit",
    "username": <string>,
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::exit",
    "message": <string>,
    "username": <string>,
    "status": "success",
}
```

</details>
