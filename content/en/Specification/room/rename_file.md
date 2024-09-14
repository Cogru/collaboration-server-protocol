---
title: Rename File
---

Request to rename a existing file.

```json
{
    "method": "room::rename_file",
    "file": "{filename}",
    "newname": "{newname}",
}
```

- `file` is the target file path you want the file to rename.
- `newname` is the new filename.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::rename_file",
    "file": "The target filename",
    "newname": "The new filename",
    "status": "success",
}
```

</details>
