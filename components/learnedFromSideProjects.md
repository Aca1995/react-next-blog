#### BLOG FROM JS MASTERY (react, next, graphql request)

# GraphCMS

- Slicno kao contentful ali sa graphql apijem, koristi se za manage podataka.. Olaksava stvari kod definisanja modela, jer sve posle mozemo da testiramo u playground-u i prepisemo u kod ako je sve ok
- Pravimo modele i definisemo fieldove
- Ubacujemo content
- Ima i API playground gde mozemo da proverimo querije i mutacije i prepisemo u nas kod u okviru 'gql'..
- Prihvataju i nas backend, na primer kod slanja komentara, nas bekend ce kontaktirati graphCMS i poslati komentar

# getStaticProps({params})

# getStaticPaths()

# Image from 'next/image'

# pages/api

Any file inside the folder pages/api is mapped to `/api/*` and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

# destructure the 'value' and rename it

```js
const { value: comment } = commentEl.current;
const { value: name } = nameEl.current;
const { value: email } = emailEl.current;

if (!comment || !name || !email) {
  setError(true);
  return;
}
// We don't need to write here 'name: name'
const commentObj = { name, email, comment, slug };
```
