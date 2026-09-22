# SHPE UWM Website

The official website for the Society of Hispanic Professional Engineers at the University of Wisconsin–Milwaukee.

Production: [shpeuwm.org](https://shpeuwm.org)

## Development

Use Node.js 24 LTS (or Node.js 22.22.1+) and npm 11.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. In Windows PowerShell, use `npm.cmd` if the `npm.ps1` launcher fails.

## Checks and commits

```sh
npm run check
npm run build
```

`check` runs ESLint and generates Next.js route types before type checking. `npm ci` installs the Husky pre-commit hook, which runs ESLint on staged code and Prettier on staged text files. Commit both `package.json` and `package-lock.json` when updating dependencies.

The toolchain intentionally uses ESLint 9 and TypeScript 6 to stay within the installed lint plugins' supported versions.

## Server-side rendering

Next.js 16 and React 19 render pages on every request through `dynamic = "force-dynamic"` in the root layout. Interactive components hydrate in the browser. The contact and calendar endpoints run on the server; the project does not use a static export.

To run the production Node.js server:

```sh
npm run build
npm start
```

To build and preview the Cloudflare Worker:

```sh
npm run dev:worker
```

The Worker preview listens on http://localhost:8771. OpenNext adapts the Next.js build for Cloudflare Workers, with `nodejs_compat` enabled in `wrangler.toml`. If native Windows encounters OpenNext filesystem issues, use WSL or the Linux CI build.

## Configuration

The calendar supports the shared UWM workbook `Website-Events.xlsx`. See [Excel event setup](docs/excel-events.md) for editor instructions and the one-time Microsoft read-only connection. Until configured, the existing event list remains active.

Set `RESEND_API_KEY` and `CONTACT_TO` in `.env.local` for the Node.js development server. For the Worker preview, use the gitignored `.dev.vars` file. Configure the production API key with `npx wrangler secret put RESEND_API_KEY`; the recipient is configured in `wrangler.toml`. Email requires a verified sending domain in Resend.

`SITE_URL` defaults to `https://shpeuwm.org`. `NEXT_PUBLIC_BASE_PATH` defaults to an empty string.

## Deployment

Pull requests run lint, type checking, and the OpenNext build in GitHub Actions. Pushes to `main` run the same checks and then deploy through OpenNext. The repository must have `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` configured as GitHub Actions secrets.

For a manual deployment:

```sh
npm run cf:login
npm run deploy
```

See the [OpenNext Cloudflare documentation](https://opennext.js.org/cloudflare/get-started) for adapter configuration.

## Credits

Matthew (Mateo) Felske — SHPE UWM Webmaster, with input, content, and feedback from the UWM SHPE E-Board.

This is a student-run initiative and is not officially affiliated with [SHPE National](https://shpe.org).
