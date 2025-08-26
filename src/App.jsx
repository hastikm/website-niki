
import Components from "./components/route";

const  {CustomRew ,
  Footer,Hero,Offer,PopulerProd,Services,SpecialOffer,Subscribe,SuperQulity } = Components;
import Nav from './section/Nav/Nav';


const App = () => {

  return(
    
<main className="relative">
  <Nav /> 
  <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero />
  </section>

  <section className="padding">
    <PopulerProd />
  </section>

  <section className="padding">
    <SuperQulity />
  </section>

  <section className="padding-x py-10">
   <Services />
  </section>

  <section className="padding">
    <Offer />
  </section>

  <section className="padding bg-pale-blue">
    <CustomRew /> 
  </section>

  <section className="padding-x sm:py-32 py-16 w-full ">
    <Subscribe />
  </section>

  <section className="padding-y padding-x bg-black paddinل-t pb-8">
   <Footer />
  </section>
</main>
)
}

export default App;