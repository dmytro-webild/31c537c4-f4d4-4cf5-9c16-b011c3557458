"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Collections", id: "#products" },
              { name: "The Vibe", id: "#about" },
              { name: "Reviews", id: "#testimonials" },
            ]}
            brandName="AlphaThreads"
            button={{ text: "Get Access", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "glowing-orb" }}
            title="Wear the Future Before Anyone Else"
            description="Exclusive streetwear drops for the new generation. Limited runs, infinite style."
            tag="NEW DROP"
            buttons={[{ text: "Shop Now", href: "#products" }]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/young-male-performer-dancing-escalators_23-2149344077.jpg?_wi=1", imageAlt: "streetwear model hoodie dark background" },
              { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-sunglasses_23-2149409792.jpg?_wi=1", imageAlt: "streetwear fashion urban alleyway" }
            ]}
            mediaAnimation="blur-reveal"
            rating={5}
            ratingText="Trusted by 10k+ trendsetters"
          />
        </div>

        <div id="about" data-section="about">
          <SplitAbout
            textboxLayout="split"
            useInvertedBackground={false}
            title="Private Access Only"
            description="We build clothes for those who don't follow trends—they set them. Sustainable, high-quality, and exclusively for you."
            tag="OUR MISSION"
            bulletPoints={[
              { title: "Sustainable Tech", description: "Eco-conscious fabrics built for the future." },
              { title: "Drop Culture", description: "Limited edition gear that moves with you." },
              { title: "Community First", description: "Designed by creators, for creators." },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432375.jpg?_wi=1"
            imageAlt="premium streetwear fabric texture"
            mediaAnimation="blur-reveal"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardNine
            textboxLayout="default"
            useInvertedBackground={true}
            animationType="blur-reveal"
            showStepNumbers={true}
            title="Why You Need This"
            description="Tech-driven apparel designed to handle your daily hustle."
            features={[
              { title: "Smart Fit", description: "Adaptive clothing that fits like a second skin.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871154.jpg?_wi=1", imageAlt: "modern ui interface adaptive design" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/factory-employee-works-mockup-tablet-executives-discussing-strategies_482257-126500.jpg?_wi=1", imageAlt: "ui interface tech mockup" } },
              { title: "Hyper-Durable", description: "Built to last through every skate session.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/fabric-texture-background_1388-107.jpg", imageAlt: "durable fabric detail stitching" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sewing-inside_23-2149007436.jpg", imageAlt: "industrial sewing apparel production" } },
              { title: "Digital Assets", description: "Every drop includes a digital collectible.", phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/3d-shape-glowing-with-bright-holographic-colors_23-2151037295.jpg", imageAlt: "digital fashion collectible graphic" }, phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-sale-glowing-3d-monitor_23-2152033018.jpg", imageAlt: "vr interface digital asset fashion" } }
            ]}
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            products={[
              { id: "p1", name: "Cyber Hoodie", price: "$89", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-woman-white-hoodie-blue-jeans-posing-against-neon-background_89887-1131.jpg", imageAlt: "product shot hoodie studio black", priceButtonProps: { text: "View Details" } },
              { id: "p2", name: "Tech Joggers", price: "$75", imageSrc: "http://img.b2bpic.net/free-photo/view-beige-tone-colored-pants_23-2150773390.jpg", imageAlt: "tech joggers studio product photography", priceButtonProps: { text: "View Details" } },
              { id: "p3", name: "Neon Tee", price: "$45", imageSrc: "http://img.b2bpic.net/free-photo/pink-hair-girl-avantgarde-style-wearing-sunglasses_114579-19318.jpg", imageAlt: "graphic t-shirt studio photography", priceButtonProps: { text: "View Details" } },
              { id: "p4", name: "Vibe Bomber", price: "$120", imageSrc: "http://img.b2bpic.net/free-photo/american-modern-talk-shirt-male-success_1303-2945.jpg", imageAlt: "bomber jacket streetwear product shot", priceButtonProps: { text: "View Details" } },
              { id: "p5", name: "Street Cap", price: "$30", imageSrc: "http://img.b2bpic.net/free-vector/vintage-skull-word-design-vector_53876-80913.jpg", imageAlt: "baseball cap product photography studio", priceButtonProps: { text: "View Details" } },
              { id: "p6", name: "Cargo Pants", price: "$95", imageSrc: "http://img.b2bpic.net/free-photo/assortment-beige-tone-colored-pants_23-2150773400.jpg", imageAlt: "cargo trousers apparel product photography", priceButtonProps: { text: "View Details" } },
            ]}
            title="The Latest Drops"
            description="Secure your size before the next drop. Click 'View Details' to explore specifications."
          />
        </div>

        <div id="pricing" data-section="pricing">
          <PricingCardOne
            animationType="depth-3d"
            textboxLayout="split"
            useInvertedBackground={true}
            plans={[
              { id: "basic", badge: "Base", price: "$9/mo", subtitle: "Access to standard drops", features: ["Early access", "Email updates"] },
              { id: "pro", badge: "Elite", price: "$29/mo", subtitle: "Priority for every drop", features: ["Same-day ship", "Private discord", "VIP events"] }
            ]}
            title="Membership Tiers"
            description="Unlock early access and exclusive drops."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="split"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Alex", date: "Jan 2025", title: "Trendsetter", quote: "Best hoodie I own, period.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-with-long-blonde-hair-wearing-red-jacket_23-2149020151.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-male-performer-dancing-escalators_23-2149344077.jpg?_wi=2" },
              { id: "2", name: "Riley", date: "Feb 2025", title: "Influencer", quote: "Quality is insane, fits perfect.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-girl-posing-with-wall_23-2148629723.jpg", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-sunglasses_23-2149409792.jpg?_wi=2" },
              { id: "3", name: "Jordan", date: "Mar 2025", title: "Collector", quote: "Everything sells out too fast!", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-diverse-latin-people_23-2151057810.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-wearing-trucker-hat_23-2149432375.jpg?_wi=2" },
              { id: "4", name: "Sam", date: "Apr 2025", title: "Fan", quote: "The tech fabrics are next level.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/two-mixed-race-black-woman-hugs-outdoor-portrait-two-mixed-race-woman-with-huge-afro-hair_633478-470.jpg", imageSrc: "http://img.b2bpic.net/free-photo/fast-fashion-concept-with-full-clothing-store_23-2150871154.jpg?_wi=2" },
              { id: "5", name: "Kai", date: "May 2025", title: "Fan", quote: "Already copped 3 drops.", tag: "Verified", avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-2000s-fashion-style-posing-with-tv_23-2149442885.jpg", imageSrc: "http://img.b2bpic.net/free-photo/factory-employee-works-mockup-tablet-executives-discussing-strategies_482257-126500.jpg?_wi=2" }
            ]}
            title="What They Say"
            description="See why everyone is talking about the new collection."
          />
        </div>

        <div id="socialproof" data-section="socialproof">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={true}
            names={["HypeBeast", "Complex", "HighSnobiety", "Vogue", "Vice", "Dazed", "Nylon"]}
            title="As Seen In"
            description="Featured by industry leading voices."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Join the Waitlist"
            description="Don't miss the next drop. Get on the list."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/cool-brunet-bearded-man-sunglasses-beige-shorts-orange-jacket-leans-white-wall-outside-crosses-arms_197531-28761.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              { title: "Shop", items: [{ label: "All Products", href: "#products" }, { label: "Drops", href: "#" }] },
              { title: "Support", items: [{ label: "Contact", href: "#contact" }, { label: "Privacy", href: "#" }] },
            ]}
            logoText="AlphaThreads"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}