import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConstantService {
  SEODATA:any;
  constructor() {
    this.SEODATA = {

      HOMEPAGE: {
          title: 'Adcuesta: Your Partner for Brand Marketing & Mobile Services',
          description: 'Adcuesta offers expert brand marketing and mobile services. Grow your brand with our tailored strategies and comprehensive solutions. Explore more today!'
      },
      ABOUT: {
          title: 'Meet Adcuesta: Your Solution for Brand & Mobile Success',
          description: 'Learn about Adcuesta, a dynamic company providing top-notch brand marketing and mobile services. Our goal is to help you succeed with tailored strategies and support.'
      },
      MVAS: {
          title: 'Adcuesta Mobile Value-Added Services (mVAS) for Growth',
          description: "Discover Adcuesta's mobile value-added services (mVAS) to enhance your brand. From content creation to fraud prevention, we drive your mobile success."
      },
      BRANDING: {
          title: 'Adcuesta Branding Services: Elevate Your Brand Presence',
          description: "Boost your brand with Adcuesta's expert branding services. We specialize in digital strategy, content, and design to make your brand stand out and connect with your audience."
      },
      GENAI: {
          title: "Adcuesta Gen AI: Transform Your Brand with AI Solutions",
          description: "Get professionally crafted product images with our AI tool. We handle the design, delivering high-quality visuals that elevate your brand effortlessly."
      },
      BLOG: {
          title: "Adcuesta Blog: Insights on Brand Marketing & Mobile Services",
          description: "Explore the Adcuesta blog for expert tips, insights, and trends in brand marketing and mobile services. Stay informed with our latest posts."
      },
      CONTACTUS: {
          title: "Contact Adcuesta: Let's Discuss Your Brand's Needs",
          description: "Reach out to Adcuesta for expert brand marketing and mobile services. We're here to help your brand grow with personalized strategies. Get in touch today!"
      },
      BLOG_DETAILS: {
        title: "SEO Mistakes to Avoid: Fix Common Pitfalls",
        description: "Learn about common SEO mistakes and how to fix them. Avoid these pitfalls to improve your search engine rankings and online visibility."
      },
      BLOG_DETAILS2: {
        title: "Security in Direct Carrier Billing: How Safe Are We?",
        description: "Explore security and fraud prevention in direct carrier billing. Understand the risks and learn how to stay safe with the latest strategies."
      },
      BLOG_DETAILS3: {
        title: "Content Marketing Ethics: Authenticity vs. Persuasion",
        description: "Discover the ethical challenges in content marketing. Learn how to balance authenticity with persuasion to build trust and credibility."
      },
      BLOG_DETAILS4: {
        title: "AI in Campaign Management: Friend or Foe?",
        description: "Explore the role of AI in campaign management. Is it a friend or foe? Learn how AI can enhance or challenge your marketing strategies."
      },
      BLOG_DETAILS5: {
        title: "Psychology of Campaigns: What Makes Audiences Tick?",
        description: "Understand the psychology behind successful campaigns. Discover what drives audience behavior and how to connect with them effectively."
      },
      BLOG_DETAILS6: {
        title: "Digital Transformation in MENA: Telecom's Leading Role",
        description: "Explore how telecom is leading digital transformation in MENA. Learn about the innovations driving change in this dynamic region."
      },
      BLOG_DETAILS7: {
        title: "Future of MVAS Content Marketing: Key Trends",
        description: "Discover key trends shaping the future of MVAS content marketing. Stay ahead with insights into what’s coming next in this evolving field."
      },
      BLOG_DETAILS8: {
        title: "Consistency in Brand Voice: Across All Platforms",
        description: "Learn the importance of maintaining a consistent brand voice across all platforms. Strengthen your brand identity with unified messaging."
      },
      BLOG_DETAILS9: {
        title: "Personal vs. Business Branding: Finding Balance",
        description: "Explore the differences between personal and business branding. Learn how to strike the right balance for maximum impact and success."
      }
    }
   }


}
