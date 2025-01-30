const Footer = () => {
    return (
        <footer className="bg-[#414B53] text-white py-8">
            <div className="container mx-auto grid grid-cols-4 gap-4 max-w-[1240px]">
                {/* Logo and Center Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Abrasive Center</h2>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-lg font-bold text-[#B08968] mb-2">PRODUCTS</h3>
                    <ul className="space-y-1">
                        <li>Abrasive Belts</li>
                        <li>Hard Abrasives</li>
                        <li>Flexible Abrasives</li>
                        <li>Diamond Abrasives</li>
                        <li>Felt Products</li>
                        <li>Polishing Pastes</li>
                        <li>Polishing Wheels</li>
                        <li>Sandpaper</li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="text-lg font-bold text-[#B08968] mb-2">ADDRESS</h3>
                    <p>Mahnitohorska 1e,</p>
                    <p>Kyiv 02000</p>
                    <h3 className="text-lg font-bold text-[#B08968] mt-4 mb-2">
                        BUSINESS DAYS / HOURS
                    </h3>
                    <p>Mon. – Fri. / 8:30 – 17:30</p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-bold text-[#B08968] mb-2">Contact Us</h3>
                    <p className="text-2xl font-bold">(044) 239 1262</p>
                    <p className="mt-2">info@abrasive.center</p>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center text-[#B08968] text-sm">
                Abrasive Center © 1995–2025. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
