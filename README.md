
### Setup

Create a D1 database with the following command:

```sh
bun wrangler d1 create <your-db-name>
```

Then, copy the output to `wrangler.toml`.

Finally, update the `d1:migrate` script (in `package.json`) to replace `YOUR_DATABASE_NAME`, and execute it.

> \[!NOTE]
> For reference, a good database name is:
>
> * Typically a combination of ASCII characters, shorter than 32 characters, and uses dashes (-) instead of spaces.
> * Descriptive of the use-case and environment. For example, “staging-db-web” or “production-db-backend”.
> * Only used for describing the database, and is not directly referenced in code.

## *Drizzle*

First, ensure that `DATABASE_URL` is configured in `.env` file, then create the database:

```bash
bun drizzle:generate # a script that executes drizzle-kit generate.
bun drizzle:migrate # a script that executes drizzle-kit migrate.
```

> \[!NOTE]
> The `drizzle-kit generate` command is used to generate SQL migration files based on your Drizzle schema.
>
> The `drizzle-kit migrate` command is used to apply the generated migrations to your database.

Read more on [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview)
