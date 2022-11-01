// components
import Navbar from "./navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
      <main>
          <Navbar/>
            { props.children }
          <Footer/>
      </main>
  )
}
