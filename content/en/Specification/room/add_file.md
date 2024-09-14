---
title: Add File
---

Request to add a file.

```json
{
    "method": "room::add_file",
    "file": "{filename}",
}
```

- `file` is the path to the newly created file.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::add_file",
    "file": "The file relative path",
    "contents": "{contents}",
    "status": "success",
}
```

</details>
