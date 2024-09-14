---
title: room::enter
---

Request sent when entering the room.

```json
{
    "method": "room::enter",
    "username": <string>,
    "password": <string>,
}
```

- `username` is the unique identifier being used in the session.
- `password` is used to enter the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::enter",
    "message": <string>,
    "username": <string>,
    "status": "success",
}
```

</details>
