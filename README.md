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

Step 2: Install Dependencies

npm install express mongoose dotenv bcrypt jsonwebtoken cors helmet morgan express-rate-limit


| Package            | Why do we need it?                         |
| ------------------ | ------------------------------------------ |
| express            | Create REST APIs                           |
| mongoose           | Connect and interact with MongoDB          |
| dotenv             | Load environment variables                 |
| bcrypt             | Hash passwords securely                    |
| jsonwebtoken       | Generate and verify JWT tokens             |
| cors               | Allow frontend to communicate with backend |
| helmet             | Add security HTTP headers                  |
| morgan             | Log incoming HTTP requests                 |
| express-rate-limit | Prevent brute-force attacks and API abuse  |



