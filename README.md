# Vaultly 🔐

## ✨ Features

-   **🔒 End-to-End Encryption** - Messages are encrypted with user-defined keys
-   **⏰ Expiration Control** - Set automatic message expiration dates
-   **🔥 One-Time Access** - Self-destructing messages after single retrieval
-   **🌙 Dark/Light Theme** - Beautiful UI with theme switching
-   **📱 Responsive Design** - Works seamlessly across all devices
-   **🎨 Modern Interface** - Animated background with Comfortaa typography

## 🚀 Quick Start

1. **Create Message**: Enter your encryption key and message content
2. **Set Options**: Configure expiration time and one-time access
3. **Share ID**: Send the generated message ID to your recipient
4. **Retrieve**: Recipient uses ID and decryption key to access the message

## 🛠️ Tech Stack

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Backend**: Fastify.js with Netlify Functions
-   **Database**: PostgreSQL with Drizzle ORM
-   **Styling**: Custom CSS with animations and gradients
-   **Typography**: Comfortaa font family
-   **Security**: Client-side encryption with custom key management

## 📦 Dependencies

-   **`@fastify/rate-limit`** - Provides rate limiting functionality to prevent API abuse and protect against spam
-   **`drizzle-orm`** - Type-safe database toolkit with SQL-like syntax for PostgreSQL operations
-   **`fastify`** - High-performance web framework for building REST APIs with excellent TypeScript support
-   **`postgres`** - Lightweight PostgreSQL client with modern async/await support
-   **`serverless-http`** - Wrapper that allows Express/Fastify apps to run as serverless functions
-   **`uuid`** - Generates unique identifiers for message storage and retrieval
-   **`@types/node`** - TypeScript type definitions for Node.js built-in modules
-   **`@types/uuid`** - TypeScript type definitions for UUID library
-   **`drizzle-kit`** - CLI tool for database schema migrations and code generation

## 📁 Project Structure

```
vaultly/
├── src/
│   ├── database/
│   │   ├── index.ts                 # Database connection and schema
│   │   └── message.ts               # Message model definitions
│   ├── function/
│   │   ├── crypto.ts                # Encryption/decryption utilities
│   │   ├── html.ts                  # HTML template rendering
│   │   └── index.ts                 # Utility functions
│   ├── routes/
│   │   ├── index.ts                 # Route definitions
│   │   ├── post-message.ts          # POST endpoint for storing messages
│   │   └── put-message.ts           # PUT endpoint for retrieving messages
│   ├── index.ts                     # Main entry point for the application
│   └── types.ts                     # TypeScript type definitions
├── .env                             # Environment variables
├── .gitignore                       # Git ignore patterns
├── .prettierignore                  # Prettier ignore patterns
├── .prettierrc                      # Prettier configuration
├── drizzle.config.ts                # Drizzle ORM configuration
├── package.json                     # Project dependencies and scripts
├── README.md                        # Project documentation
└── tsconfig.json                    # TypeScript configuration
```

## 📄 File Explanations

### Core Application Files

-   **`database/index.ts`** - Database schema definition using Drizzle ORM, handles PostgreSQL connection
-   **`routes/index.ts`** - Main API route handler that processes HTTP requests
-   **`post-message.ts`** - API endpoint for storing new encrypted messages with expiration settings
-   **`put-message.ts`** - API endpoint for retrieving messages, handles one-time access logic
-   **`crypto.ts`** - Client-side encryption utilities for message security
-   **`html.ts`** - HTML template generation for the web interface

### Configuration Files

-   **`drizzle.config.ts`** - Database ORM configuration for schema management
-   **`netlify.toml`** - Netlify deployment settings and build configuration
-   **`tsconfig.json`** - TypeScript compiler configuration
-   **`package.json`** - Project metadata, dependencies, and npm scripts

### Development Files

-   **`.prettierrc`** - Code formatting rules for consistent styling
-   **`.gitignore`** - Specifies files to exclude from version control
-   **`env.example`** - Template for required environment variables

### Documentation

-   **`README.md`** - Comprehensive project documentation (this file)
-   **`LICENSE`** - MIT license for open-source usage

## 🔧 Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/rafi983/vaultly.git
    cd vaultly
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Set up environment variables**

    ```bash
    cp env.example .env
    # Edit .env with your database credentials
    ```

4. **Start development server**
    ```bash
    node --run dev
    ```

## 🎯 Use Cases

-   Sharing passwords and API keys
-   Sending confidential business information
-   Temporary secure communication
-   One-time sensitive data transmission

## 🚀 Deployment

This project is configured for automatic deployment on Netlify. Simply connect your GitHub repository to Netlify, and it will automatically deploy on every push to the main branch.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
