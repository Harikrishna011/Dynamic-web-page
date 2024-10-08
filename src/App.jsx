
import Navbar from "./assets/components/Navbar"
import Hero from "./assets/components/Hero"
import Card from "./assets/components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
           
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>

        </div>
    )
}