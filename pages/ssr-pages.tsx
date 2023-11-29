// pages/ssr-page.tsx
import { GetServerSideProps } from 'next';

type SSRPageProps = {
  message: string;
};

function SSRPage({ message }: SSRPageProps) {
  return <div>{message}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Here you can fetch data from an API or perform any server-side logic.
  // For demonstration, we'll return a simple message.
  const message = 'This page is server-side rendered with this message.';

  // The returned object will be passed as props to the page component.
  return { props: { message } };
};

export default SSRPage;
