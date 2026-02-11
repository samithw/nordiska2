import { useState, useEffect } from 'react';
import { FullScreenMenu } from './FullScreenMenu';
import { Icon } from './Icons';

export const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: "Who We Are", id: "who-we-are" },
        { label: "What We Do", id: "what-we-do" },
        { label: "Industries", id: "industries" },
        { label: "Success Stories", id: "success-stories" }
    ];

    const handleMenuClick = (id: any) => {
        setActiveMenu(id);
    };

    const handleContactClick = () => {
        const element = document.getElementById('contacts');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <FullScreenMenu activeMenu={activeMenu} onClose={() => setActiveMenu(null)} />
            <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-navy/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center text-beige">
                <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src="/images/ns__logo__trans1.png" alt="NORDISKA Logo" className="h-10" />
                    </div>

                    <div className="hidden md:flex items-center gap-10 font-medium text-sm">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleMenuClick(item.id)}
                                className="text-white hover:text-teal transition-colors uppercase tracking-widest relative group font-bold"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </button>
                        ))}
                        <button
                            onClick={handleContactClick}
                            className="text-white hover:text-teal transition-colors uppercase tracking-widest relative group font-bold"
                        >
                            Contacts
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </button>
                    </div>

                    <button className="md:hidden text-beige hover:text-teal transition-colors" onClick={() => handleMenuClick('who-we-are' as any)}>
                        <Icon name="menu" className="w-8 h-8" />
                    </button>
                </div>
            </nav>
        </>
    );
};
