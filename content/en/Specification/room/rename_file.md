---
title: room::rename_file
---

Request to rename a existing file.

```json
{
    "method": "room::rename_file",
    "file": <path>,
    "newname": <path>,
}
```

- `file` is the target file path you want the file to rename.
- `newname` is the new filename.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::rename_file",
    "file": <path>,
    "newname": <path>,
    "status": "success",
}
```

</details>
