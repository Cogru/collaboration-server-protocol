---
title: Broadcast
---

Send a room message.

This message goes across the project.

```json
{
    "method": "room::broadcast",
    "message": "This is a broadcast message!~",
}
```

- `message` you want to say to other users in the room.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::broadcast",
    "username:": "{username}",
    "message": "This is a broadcast message!~",
    "status": "success",
}
```

</details>
