import AboutPart from "./components/AboutPart"
import HomePage from "./components/HomePage"
import CategoryCards from "./components/CategoryCards"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {

  return (
    <main className="mx-auto px-4 sm:px-6 max-w-full" >
      <Navbar  />
      <HomePage />
      <AboutPart />
      <CategoryCards />
      <Footer />
    </main>
  )
}
