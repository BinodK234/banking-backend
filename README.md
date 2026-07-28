banking-backend
│
├── src
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middleware
│   ├── models
│   ├── utils
│   ├── validators
│   ├── constants
│   ├── app.js
│   └── server.js
│
├── package.json
│
└── .env

Why this structure?

Routes → define API endpoints.
Controllers → receive the request and coordinate the work.
Services → contain business logic.
Models → define MongoDB collections.
Middleware → authentication, authorization, logging, rate limiting.
Validators → validate incoming data.
Config → database, environment variables, external services.

