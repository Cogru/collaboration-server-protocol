# collaboration-server-protocol

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## Request

This section describes what request can be sent over to the server.

For all requests, the field `method` is always **required**.

### 🚪 Enter Session

```json
{
    "method": "enter",
    "username": "my-name",
    "password": "XXXXXX",
}
```

- `username` is the unique identifier being used in the session.
- `password` is used to enter the session.

## 📁 Similar Projects

- [floobits](https://floobits.com/) (abandoned)
- [tandem](https://github.com/typeintandem/tandem)
- [duckly](https://duckly.com/) (malware?)


<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
