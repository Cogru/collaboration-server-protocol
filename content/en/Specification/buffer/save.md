---
title: buffer::save
---

Request to save the buffer.

```json
{
    "method": "buffer::save",
    "file": <path>,
    "contents": <string>,
}
```

- `file` is the target filename you want to save.
- `contents` is the entire buffer string.

<details>
<summary>Example response</summary>

```json
{
    "method": "buffer::save",
    "file": <path>,
    "contents": <string>,
    "status": "success",
}
```

The client will save the buffer in the view (if it exits).
Otherwise, it will write the file to the local storage.

</details>
