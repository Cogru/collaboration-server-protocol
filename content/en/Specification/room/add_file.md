---
title: room::add_file
---

Request to add a file.

```json
{
    "method": "room::add_file",
    "file": <path>,
}
```

- `file` is the path to the newly created file.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::add_file",
    "file": <path>,
    "contents": <string>,
    "status": "success",
}
```

</details>
