import Layout from '../components/Layout';
export default function Logbook() {
  return (
    <Layout>
      <h2>Flight Logbook</h2>
      <input placeholder="Aircraft Type" /><br />
      <input type="date" /><br />
      <input type="number" placeholder="Hours Flown" /><br />
      <button>Save</button>
    </Layout>
  );
}