import type { CodegenConfig } from "@graphql-codegen/cli";

//
//
//

const GRAPHQL_ENDPOINT = process.env.SUPABASE_STORE_GRAPHQL_URL ?? "";
const ACCESS_TOKEN = process.env.SUPABASE_API_KEY ?? "";

//
// Generate GraphQL schema and TypeScript types
// ref: https://the-guild.dev/graphql/codegen/docs/guides/react-vue
//

const config: CodegenConfig = {
  overwrite: true,
  // ref: https://the-guild.dev/graphql/config/docs/user/schema#passing-headers
  schema: {
    [GRAPHQL_ENDPOINT]: {
      headers: {
        apiKey: `${ACCESS_TOKEN}`,
      },
    },
  },
  documents: "app/graphql/**/*.ts",
  generates: {
    "app/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-apollo-client-helpers",
        "typescript-react-apollo",
        "typescript-operations",
      ],
      config: {
        // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo#withhooks
        withHooks: false,
        // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo#withresulttype
        withResultType: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
