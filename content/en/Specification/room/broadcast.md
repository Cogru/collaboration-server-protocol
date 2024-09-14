---
title: room::broadcast
---

Send a room message.

This message goes across the project.

```json
{
    "method": "room::broadcast",
    "message": <string>
}
```

- `message` you want to say to other users in the room.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::broadcast",
    "username:": <string>,
    "message": <string>,
    "status": "success",
}
```

</details>
