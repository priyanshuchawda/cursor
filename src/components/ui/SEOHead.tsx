
import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Update meta tags for better SEO
    document.title = 'Cursor Lab - Interactive Cursor Playground | PriyanshuTech';
    
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // SEO Meta Tags
    updateMeta('description', 'Experience interactive cursor effects in this cyberpunk-themed lab. Test meteor trails, morphic blobs, and neon rings. Built by Priyanshu Chawda.');
    updateMeta('keywords', 'cursor effects, interactive web design, cyberpunk UI, JavaScript animations, web development, priyanshu chawda');
    updateMeta('author', 'Priyanshu Chawda');
    updateMeta('robots', 'index, follow');
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph Tags
    updateProperty('og:title', 'Cursor Lab - Interactive Cursor Playground');
    updateProperty('og:description', 'Experience interactive cursor effects in this cyberpunk-themed lab. Test meteor trails, morphic blobs, and neon rings.');
    updateProperty('og:type', 'website');
    updateProperty('og:url', 'https://cursor-lab.priyanshutech.xyz');
    updateProperty('og:site_name', 'PriyanshuTech Labs');

    // Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', 'Cursor Lab - Interactive Cursor Playground');
    updateMeta('twitter:description', 'Experience interactive cursor effects in this cyberpunk-themed lab.');
    updateMeta('twitter:creator', '@priyanshuchawda');

    // Technical Meta Tags
    updateMeta('theme-color', '#00ffff');
    updateMeta('msapplication-TileColor', '#000000');
  }, []);

  return null;
};

export default SEOHead;
