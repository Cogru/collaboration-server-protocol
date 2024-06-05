# collaboration-server-protocol

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## 🏗 Specification

This section describes what request can be sent over to the server.

For all requests, the field `method` is always **required**.

### 🖥 Initialization

Initialize the client on the server.

```json
{
    "method": "init",
    "path": "/path/to/your/project/",  // Workspace directory
}
```

<details>
<summary>Example response</summary>

```json
{
    "method": "init",
    "message": "Done initialized [/path/to/your/project/]",
    "status": "success",
}
```

</details>

### 🚪 Enter Room

Request sent when entering the room.

```json
{
    "method": "room::enter",
    "username": "the-username",
    "password": "XXXXXX",
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
    "username": "the-username",
    "status": "success",
}
```

</details>

### 🚪 Exit Room

Request sent when exiting the room.

```json
{
    "method": "room::exit",
    "username": "the-username",
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
    "username:": "the-username",
    "message": "This is a broadcast message!~",
    "status": "success",
}
```

</details>


<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
