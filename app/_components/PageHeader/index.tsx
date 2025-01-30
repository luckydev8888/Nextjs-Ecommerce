const Header = () => {
    return (
        <div>
            <section className="page-header h-40 bg-sanding-belts bg-cover bg-center relative">
                {/* Breadcrumb Container */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/50">
                    <p className="text-sm font-light uppercase tracking-wider">Abrasive Center {'>'} Products</p>
                    <h1 className="text-4xl font-bold">Abrasive Belts</h1>
                </div>
            </section>
        </div>
    );
};

export default Header;
