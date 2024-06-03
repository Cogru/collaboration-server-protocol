# collaboration-server-protocol

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## 📫 Request

This section describes what request can be sent over to the server.

For all requests, the field `method` is always **required**.

### 🚪 Enter Room

Request sent when entering the room.

```json
{
    "method": "enter",
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
    "method": "enter",
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
    "method": "exit",
    "username": "the-username",
}
```

- `username` is the unique identifier being used in the session.

<details>
  <summary>Example response</summary>


```json
{
    "method": "exit",
    "message": "You have successfully left the room",
    "status": "success",
}
```

</details>


<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
