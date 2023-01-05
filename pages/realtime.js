import Layout from 'components/layout/Layout';
import RealtimeDashboard from 'components/pages/RealtimeDashboard';
import useRequireLogin from 'hooks/useRequireLogin';

export default function RealtimePage() {
  const { user } = useRequireLogin();

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <RealtimeDashboard />
    </Layout>
  );
}
