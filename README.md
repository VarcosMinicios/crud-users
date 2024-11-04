# User CRUD API

A simple CRUD application for managing users, built
with [Bun](https://bun.sh/), [Elysia](https://elysiajs.com/), [Mikro-ORM](https://mikro-orm.io/), and TypeScript. This
project leverages Elysia for request validation and Mikro-ORM for database management.

## Features

- Create, Read, Update, and Delete (CRUD) operations for users.
- Input validation with Elysia.
- Database management with Mikro-ORM.
- Fully written in TypeScript for type safety.

## Technologies

- **Bun**
- **Elysia**
- **Mikro-ORM**
- **TypeScript**

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VarcosMinicios/crud-users.git
   cd crud-users

Install dependencies:

```bash

bun install

```

Running the Project
To start the development server, run:

```bash

bun run dev

```

The server will run at http://localhost:3000.

Project Structure
This project follows the file naming convention entity.type.ts, for example:

user.repository.ts - Repository for user-related database operations.

user.service.ts - Service layer for user logic.

user.controller.ts - Controller for handling user routes.
