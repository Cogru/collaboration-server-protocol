---
title: buffer::sync
---

Request to synce the buffer.

```json
{
    "method": "buffer::sync",
    "file": <path>,
}
```

- `file` is the path to the newly created file.

<details>
<summary>Example response</summary>

```json
{
    "method": "buffer::sync",
    "file": <path>,
    "contents": <string>,
    "status": "success",
}
```

The client will overwrite the buffer view (if exists).
Otherwise, write to the local storage.

</details>
