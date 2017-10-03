## Contributing to Sing App React Version

Make sure to check this list before every push:

1) Pushing to the repository skipping lint checks is **NOT ALLOWED**.
Make sure to run `yarn run lint` before commit and fix all errors.
2) `package.json` dependencies **MUST NOT** contain any ambiguous versions.
E.g. `^5.0.0`, `~5.0.0` are bad versions, use `5.0.0` instead. If your package is fetched directly from repository
explicitly specify commit hash, e.g. `https://github.com/repository.git#df545d9e4bdae9b5ffa112fcb70b3f8350929875`.
3) Synchronize versions. If a change is made that affects common functionality
commit it to **BOTH** seed and full branches. Use cherry-pick.
4) For every component (e.g. Sidebar.js) include local `package.json`
(see [`./src/components/Sidebar/package.json`](./src/components/Sidebar/package.json) as an example) and specify
entry points for easier usage.
5) Follow bootstrap practices. If they use `rem` units, use `rem` units and avoid `px`.
6) Introduce new scss variable when property used in more than one place. Think about other places where this variable can
be used in the app. Reuse it there too.
7) Do not introduce regressions. Think about possible places where your new code can break the old one. Do not break
working functionality/styles.
