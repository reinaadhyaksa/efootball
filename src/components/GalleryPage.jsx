import Footer from "../layout/footer";
import Header from "../layout/header";
import { Banner, GallerySections, VideoSections } from "../layout/section";

export default function GalleryPages() {
    return (
        <div className="min-h-screen">
            <Header />
            <Banner 
                title={"Game Gallery"} 
                text={"Visual showcase of eFootball 2024's stunning graphics and gameplay"} 
            />
            <GallerySections />
            <VideoSections />
            <Footer />
        </div>
    )
}