---
title: Initialization
---

Initialize the client on the server.

```json
{
    "method": "init",
    "path": "{/path/to/your/project/}",
}
```

- `path` is the project directory to sync.

<details>
<summary>Example response</summary>

```json
{
    "method": "init",
    "message": "Done initialized [{/path/to/your/project/}]",
    "status": "success",
}
```

</details>
