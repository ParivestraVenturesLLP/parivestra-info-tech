import { Helmet } from "react-helmet-async";

export function JsonLd({ schema }) {
  if (!schema) return null;
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
