import Image from "next/image";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-2xl px-4s sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-image-what">
                <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'>Teams that ship with us.</h3>
                <h4 className="text-lg font-normal text-darkgray text-center mt-4">Our partners rely on our React, Next.js, Node.js, and Python expertise to deliver fast, scalable products—on time, every time.</h4>

                <div className="lg:relative">
                    <Image src={'/assets/clientsay/avatars.png'} alt="avatar-image" width={1061} height={733} className="hidden lg:block" />

                    <span className="lg:absolute lg:bottom-40">
                        <Image src={'/assets/clientsay/user.png'} alt="user-image" width={168} height={168} className="mx-auto pt-10 lg:pb-10" />
                        <div className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm">
                            <p className="text-base font-normal text-center text-darkgray">“They felt like an in‑house team. Clean TypeScript, clear communication, and consistent delivery. We launched ahead of schedule.”</p>
                            <h3 className="text-2xl font-medium text-center py-2">Sara Mitchell</h3>
                            <h4 className="text-sm font-normal text-center">Head of Product, FintechCo</h4>
                        </div>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Clientsay;
