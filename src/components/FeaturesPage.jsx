import Footer from "../layout/footer";
import Header from "../layout/header";
import { Banner, GameModes, Gameplay, NewFeature } from "../layout/section";

export default function FeaturesPages() {
    return (
        <div className="min-h-screen">
            <Header />
            <Banner 
                title={"Game Features"} 
                text={"Discover all the exciting features that make eFootball 2024 the most realistic football experience"} 
            />
            <Gameplay />
            <GameModes />
            <NewFeature />
            <Footer />
        </div>
    )
}