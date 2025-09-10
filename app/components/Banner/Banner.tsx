import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Web development done right.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            We build fast, scalable products using React, Next.js, Node.js, JavaScript, TypeScript, and Python. From MVPs to enterprise platforms, we ship clean code and business results.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <a href="#portfolio" className='inline-block text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
                            See our portfolio
                        </a>  
                    </div>

                    <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
