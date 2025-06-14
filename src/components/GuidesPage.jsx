import Footer from "../layout/footer";
import Header from "../layout/header";
import { Banner, BasicControls, DreamTeamGuide, FAQSection, GettingStarted } from "../layout/section";

export default function GuidePages() {
    return (
        <div className="min-h-screen">
            <Header />
            <Banner 
                title={"Beginner's Guide"} 
                text={"Everything you need to know to start your eFootball 2024 journey"} 
            />
            <GettingStarted />
            <BasicControls />
            <DreamTeamGuide />
            <FAQSection />
            <Footer />
        </div>
    )
}