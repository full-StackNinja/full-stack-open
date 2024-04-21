::: mermaid
sequenceDiagram
participant b as Browser
participant s as Server
b->>s: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate s
s->>b: document / Redirect
deactivate s
b->>s: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate s
s->>b: HTML document
deactivate s
b->>s: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate s
s->>b: Stylesheet
deactivate s
b->>s: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate s
s->>b: the Javascript file
deactivate s
Note right of b: the browser executes Javascript file which contains GET request to server for fetching json data
b->>s: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate s
s->>b: [ { "content": "hello world!", "date": "2024-04-21T06:54:28.171Z"}, ...]

deactivate s
Note right of b: the browser renders notes data as HTML by executing event handler

::: mermaid