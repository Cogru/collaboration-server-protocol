---
title: file::say
---

Say something in the file channel.

```json
{
    "method": "file::say",
    "file": <path>,
    "message": <string>,
}
```

- `file` is the file channel ID.
- `message` to send to other users in this file.

<details>
<summary>Example response</summary>

```json
{
    "method": "file::say",
    "username": <string>
    "file": <path>,
    "message": <string>,
    "status": "success",
}
```

</details>
