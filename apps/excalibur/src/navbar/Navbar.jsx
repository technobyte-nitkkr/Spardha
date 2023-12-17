import './Navbar.css'
export default function Navbar(){
    let back = '<'
    return(
        <nav>
            <a><span>{back}</span></a>
            <span className="techspardha_logo">
                {/* ellipse svg */}
                <svg xmlns="http://www.w3.org/2000/svg" width="271" height="201" viewBox="0 0 271 201" fill="none">
                    <g filter="url(#filter0_f_2250_4319)">
                        <ellipse cx="135.71" cy="100.436" rx="53.7097" ry="18.5" fill="#367CFF" fillOpacity="0.7"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_2250_4319" x="0.838715" y="0.774261" width="269.742" height="199.323" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="40.5806" result="effect1_foregroundBlur_2250_4319"/>
                        </filter>
                    </defs>
                </svg>
                <img src="./public/images/TechspardhaLogo.svg" alt="T" />
            </span>
        </nav>
    )
}