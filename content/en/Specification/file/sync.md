---
title: file::sync
---

Request to synce the buffer.

```json
{
    "method": "file::sync",
    "file": <path>,
}
```

- `file` is the filename you want to sync.

<details>
<summary>Example response</summary>

```json
{
    "method": "file::sync",
    "file": <path>,
    "contents": <string>,
    "status": "success",
}
```

The client will overwrite the file.

</details>
