import React, { lazy, Suspense } from "react";

// Eager load critical components (above the fold)
import Home from "../../components/home/home";
import AboutSection from "../../components/about/aboutussection";
import PillarsSection from "../../components/3pillars/3pillars";
import Footer from "../../components/footer/footer";

// Lazy load non-critical/below-the-fold components
const OurClients = lazy(() => import("../../components/OurClients/ourclients"));
const HighlightedWork = lazy(() => import("../../components/Highlightedworks/Highlightedworks"));

const Homepage = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <div>
                <Home />
            </div>
            <div>
                <AboutSection />
            </div>
            <div>
                <PillarsSection />
            </div>

            <Suspense fallback={<div>Loading highlighted work...</div>}>
                <div>
                    <HighlightedWork />
                </div>
            </Suspense>

            <Suspense fallback={<div>Loading our clients...</div>}>
                <div>
                    <OurClients />
                </div>
            </Suspense>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Homepage;
