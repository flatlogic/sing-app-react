## Contributing to Sing App React Version

1) Pushing to the repository skipping lint checks is **NOT ALLOWED**.
Make sure to run `yarn run lint` before commit and fix all errors.
2) `package.json` dependencies **MUST NOT** contain any ambiguous versions.
E.g. `^5.0.0`, `~5.0.0` are bad versions, use `5.0.0` instead. If your package is fetched directly from repository
explicitly specify commit hash, e.g. `https://github.com/repository.git#df545d9e4bdae9b5ffa112fcb70b3f8350929875`.
3) For every component (e.g. Sidebar.js) include local `package.json`
(see [`./src/components/Sidebar/package.json`](./src/components/Sidebar/package.json) as an example) and specify
entry points for easier usage.
4)
