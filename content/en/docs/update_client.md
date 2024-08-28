---
title: Update client
---

Update a single client's information.

This request should be sent every almost every state change since the server
will need to notify other clients to update their state.

```json
{
    "method": "room::update_client",
    "path": "{current/file/path}",
    "point": 1,
    "region_beg": null,
    "region_end": null,
    "color_cursor": "#FFF",
    "color_region": "#00F",
}
```

- `path` the file path the user is currently in.
- `point` is the cursor position (byte position).
- `region_beg` is the beginning of the region (when active); omit or `null` if region is not active.
- `region_beg` is the end of the region (when active); omit or `null` if region is not active.
- `color_cursor` is the cursor color you want other clients to see. (customizable)
- `color_region` is the region color you want other clients to see. (customizable)

<details>
<summary>Example response</summary>

```json
{
    No response
}
```

</details>
