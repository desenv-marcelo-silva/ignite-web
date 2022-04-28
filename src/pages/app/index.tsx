import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

export function Home({ data }) {
  const { user } = useUser();
  return (
    <div>
      <h1>Bem vindo</h1>
      <pre>
        {JSON.stringify(data.products, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(user, null, 4)}
      </pre>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return await getServerPageGetProducts(null, ctx);
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);