
// Data.ts

// Phone number list
export const numbers: string[] = ['+916381748857'];

// Type definition for social media links
export interface SocialMediaLinks {
    email: string;
    github: String;
    websiteUrl: string;
    linkedin:String;
}

// Social media links data
export const socialmedialink: SocialMediaLinks = {
    email: 'debe@shinegrowkids.com',
    websiteUrl: 'http://www.shinegrowkids.com',
    github: "https://github.com/Vignesh8205",
    linkedin:"https://linkedin.com/in/vignesh-s-95610225b"
};


// hoverEffects.ts
// src/utils/hoverEffects.ts
export const hoverEffectClasses = `
  relative z-10 transition-all duration-500 ease-in-out transform
  hover:scale-110 hover:rotate-1 hover:-translate-y-1
  hover:text-white hover:shadow-[0_0_30px_rgba(255,0,200,0.6)]
  hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500
  before:absolute before:inset-0 before:z-[-1] before:rounded-xl
  before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-indigo-500
  before:opacity-0 before:transition-all before:duration-500 before:blur-md
  hover:before:opacity-50
`;
