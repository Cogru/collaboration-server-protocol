---
title: buffer::update
---

Addition and Deletion to the buffer.

```json
{
    "method": "buffer::update",
    "path": <string>,
    "add_or_delete": <string>,
    "beg": <number>,
    "end": <number>,
    "contents": <string>,
}
```

- `path` if the modified filename.
- `add_or_delete` is a string boolean; it's either `"add"` or `"delete"`.
- `beg` is the beginning point of modification.
- `end` is the end point of modification.
- `contents` is the string added to the buffer (not the file contents).

<details>
<summary>Example response</summary>

```json
{
    "method": "buffer::update",
    "username": "{username}",
    "file": <string>,
    "add_or_delete": <string>,
    "beg": <number>,
    "end": <number>,
    "contents": <string>,
    "status": "success",
}
```

The client will navigate to the file and modify the existing buffer in the view.

</details>
