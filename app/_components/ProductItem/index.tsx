import Image from "next/image";

const ProductItem = ({ name, image, overlayImage }: { name: string; image: string; overlayImage: string }) => {
    return (
        <div className="relative group border border-gray-200 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full h-40">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Overlay Container */}
            <div className="absolute bottom-5 left-2 flex items-center gap-2 bg-[#04233C99] bg-opacity-80 text-white px-2 py-5 rounded-md">
                {/* Product Name */}
                <p className="text-[17px] font-bold">{name}</p>
            </div>

            {/* Manufacturer Overlay Image */}
            <div className="absolute bottom-2 left-6 bg-[#dcdcdc]">
                <Image
                    src={overlayImage}
                    alt={`${name} manufacturer`}
                    width={40}
                    height={20}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ProductItem;
