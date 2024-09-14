---
title: file::info
---

Return a list of users in the file.

```json
{
    "method": "file::info",
}
```

<details>
<summary>Example response</summary>

```json
{
    "method": "file::info",
    "clients": [{
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
