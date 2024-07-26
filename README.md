# collaboration-server-protocol

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## 🏗 Specification

This section describes what request can be sent over to the server.

For all requests, the field `method` is always **required**.

### 🖥 Ping

Ping the server.

```json
{
    "method": "ping",
}
```

<details>
<summary>Example response</summary>

```json
{
    "method": "pong",
    "timestamp": "2024-07-26 15:29:23.284806 -07:00",
    "status": "success",
}
```

</details>

### 🖥 Initialization

Initialize the client on the server.

```json
{
    "method": "init",
    "path": "{/path/to/your/project/}",  // Workspace directory
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

### 🚪 Enter Room

Request sent when entering the room.

```json
{
    "method": "room::enter",
    "username": "{username}",
    "password": "{XXXXXX}",
}
```

- `username` is the unique identifier being used in the session.
- `password` is used to enter the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::enter",
    "message": "{username} has entered the room",
    "username": "{username}",
    "status": "success",
}
```

</details>

### 🚪 Exit Room

Request sent when exiting the room.

```json
{
    "method": "room::exit",
    "username": "{username}",
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::exit",
    "message": "{username} has left the room",
    "username": "{username}",
    "status": "success",
}
```

</details>

### 🦶 Kick

Request sent when kicking a user out of the room.

```json
{
    "method": "room::kick",
    "username": "{username}",
}
```

- `username` is the unique identifier being used in the session.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::kick",
    "username": "{target_username}",
    "admin": "{admin_username}",
    "message": "{target} has been kicked out by {admin}",
    "status": "success",
}
```

</details>

### 📢 Broadcast

Send a room message.

This message goes across the project.

```json
{
    "method": "room::broadcast",
    "message": "This is a broadcast message!~",
}
```

- `message` you want to say to other users in the room.

<details>
<summary>Example response</summary>

```json
{
    "method": "room::broadcast",
    "username:": "{username}",
    "message": "This is a broadcast message!~",
    "status": "success",
}
```

</details>

### ✏ Update client

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


<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
