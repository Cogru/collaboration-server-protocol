---
title: Info
---

Return a list of users in room.

```json
{
    "method": "room::info",
    "file": "{filename}",
}
```

- `file` is the path to the file you want to delete.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::info",
    "clients": [
      {
        "username": <string>,
        "path": <string>,
        "point": <number>,
        "region_beg": <number>,
        "region_end": <number>,
        "color_cursor": <color>,
        "color_region": <color>,
      },
      ...
    ],
    "status": "success",
}
```

</details>

