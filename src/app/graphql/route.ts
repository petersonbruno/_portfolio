import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";
import { NextRequest } from "next/server";

const schema = await buildSchema({
  resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async (req) => ({ req }),
});

export const GET = async (request: NextRequest, context: { params?: any }) => {
  return (handler as unknown as (req: NextRequest, ctx?: any) => Promise<Response>)(request, context);
};

export const POST = async (request: NextRequest, context: { params?: any }) => {
  return (handler as unknown as (req: NextRequest, ctx?: any) => Promise<Response>)(request, context);
};
