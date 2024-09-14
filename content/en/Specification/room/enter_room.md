---
title: Enter Room
---

Request sent when entering the room.

```json
{
    "method": "room::enter",
    "username": "{username}",
    "password": "{XXXXXX}",
}
```

- `username` is the unique identifier being used in the session.
- `password` is used to enter the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::enter",
    "message": "{username} has entered the room",
    "username": "{username}",
    "status": "success",
}
```

</details>
