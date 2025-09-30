// Reusable Footer Component
function insertFooter() {
    const footerHTML = `
    <footer class="border-t border-black/5 bg-[#2C3E50] text-white relative overflow-hidden">
        <!-- Background Icon Watermark -->
        <div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <img src="/public/logo.svg" alt="" class="w-96 h-96 opacity-30" />
        </div>
        
        <div class="mx-auto max-w-6xl px-6 py-16 md:py-20 relative z-10">
            <!-- Two Column Layout -->
            <div class="grid md:grid-cols-2 gap-12 mb-12">
                <!-- Left Column: About -->
                <div class="text-center md:text-left">
                    <h2 class="text-3xl font-semibold tracking-tight mb-4">About</h2>
                    
                    <!-- Blue Separator Line -->
                    <div class="w-24 h-0.5 bg-[#0A74DA] mx-auto md:mx-0 mb-6"></div>
                    
                    <!-- About Description -->
                    <p class="text-base leading-relaxed text-white/90">
                        Sorta Systems is run by Evan, an Engineering Manager with over 10 years in enterprise security and IT infrastructure at large technology companies. I've spent my career working with systems that protect millions of users—now I'm bringing that expertise to small businesses that don't have access to enterprise-grade automation. I take on a limited number of clients and build practical, working systems with no ongoing dependencies.
                    </p>
                </div>
                
                <!-- Right Column: Contact -->
                <div class="text-center md:text-right">
                    <h2 class="text-3xl font-semibold tracking-tight mb-4">Contact</h2>
                    
                    <!-- Blue Separator Line -->
                    <div class="w-24 h-0.5 bg-[#0A74DA] mx-auto md:ml-auto md:mr-0 mb-6"></div>
                    
                    <!-- Contact Info -->
                    <div class="space-y-3 text-base text-white/90">
                        <p>
                            <a href="mailto:evan@sortasystems.co.uk" class="hover:text-[#0A74DA] transition-colors">
                                evan@sortasystems.co.uk
                            </a>
                        </p>
                        <p>Serving small businesses across Essex and beyond</p>
                    </div>
                </div>
            </div>
            
            <!-- Bottom Section: Copyright -->
            <div class="border-t border-white/10 pt-8 text-center">
                <p class="text-sm text-white/60">© 2025 Sorta Systems. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}

// Auto-insert footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertFooter);
} else {
    insertFooter();
}
