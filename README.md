# collaboration-server-protocol

`collaboration-server-protocol` (CSP) is the analog to [language-server-protocol][]
(LSP) but for the cross-editor real-time editing.

## Request

This section describes what request can be sent over to the server.

For all requests, the field `method` is always **required**.

### 📤 Create Account (Signup)

Create an account before logging in.

```json
{
    "method": "signup",
    "username": "my-name",
    "email": "my.email@example.com",
    "email-confirm": "my.email@example.com",
    "password": "XXXXXX",
}
```

- `username` is the unique identifier of the account
- `email` registered email
- `email-confirm` confirmation email
- `password` used to log in.

### 📤 Login Request

Login to the server to get started with the collaboration services.

```json
{
    "method": "login",
    "username": "my-name",
    "email": "my.email@example.com",
    "password": "XXXXXX",
}
```

- `username` and `email`; one must required and one must be an empty string.
- `password` is required.

### 📤 Logout Request

Log out from the current session.

```json
{
    "method": "logout",
    "username": "my-name",
    "email": "my.email@example.com",
}
```

- `username` and `email`; one must required and one must be an empty string.

## 📁 Similar Projects

- [floobits](https://floobits.com/) (abandoned)
- [tandem](https://github.com/typeintandem/tandem)
- [duckly](https://duckly.com/) (malware?)



<!-- Links -->

[language-server-protocol]: https://github.com/microsoft/language-server-protocol
