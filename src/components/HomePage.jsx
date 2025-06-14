import Footer from "../layout/footer";
import Header from "../layout/header";
import { HeroBanner, LatestUpdate, QuickFeatures, Testimonial } from "../layout/section";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroBanner />
            <LatestUpdate />
            <Testimonial />
            <QuickFeatures />
            <Footer />
        </div>
    );
}