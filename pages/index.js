import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";

export default function Home({ country }) {
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=wwqlow479s7tmicw")
    .then((res) => res.data.location.country)
    .catch((err) => console.log(err));

  return { props: { country: { name: data.name, flag: data.flag.emojitwo } } };
}
