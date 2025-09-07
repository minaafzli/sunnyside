function Footer() {
    return (
        <div className="flex flex-col bg-[#79c8b7] h-100 items-center justify-center">
            <img src="/images/logo.svg" alt="sunnyside" className="pb-10"/>
            <ul className="flex gap-10 items-center pb-20">
                <li><a href="#" className="text-[#25564b] font-[barlow] hover:text-white">About</a></li>
                <li><a href="#" className="text-[#25564b] font-[barlow] hover:text-white">Services</a></li>
                <li><a href="#" className="text-[#25564b] font-[barlow] hover:text-white">Projects</a></li>
            </ul>
            <ul className="flex gap-5">
            <li><img src="/images/icon-facebook.svg" alt="facebook" /></li>
            <li><img src="/images/icon-instagram.svg" alt="instagram" /></li>
            <li><img src="/images/icon-pinterest.svg" alt="pinterest" /></li>
            <li><img src="/images/icon-twitter.svg" alt="twitter" /></li>
            </ul>
            

        </div>
    )
}

export default Footer
