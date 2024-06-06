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
    "message": "You have successully entered the room",
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
    "message": "You have successfully left the room",
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
    "message": "{target} has been kicked out by {you}",
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

- `username` is the unique identifier being used in the session.

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


<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
