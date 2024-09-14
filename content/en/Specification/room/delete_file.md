---
title: Delete File
---

Request to delete a file.

```json
{
    "method": "room::delete_file",
    "file": "{filename}",
}
```

- `file` is the path to the file you want to delete.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::delete_file",
    "file": "The file relative path",
    "status": "success",
}
```

</details>
