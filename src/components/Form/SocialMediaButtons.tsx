import x from "./form_assets/x.png";
import google from "./form_assets/google.png";
import fb from "./form_assets/fb.png";

export default function SocialMediaButtons(){
    return(
        <div className="flex justify-center items-center w-full gap-4 mt-7 mb-7">
            <button
                className="w-12 h-12 bg-center bg-cover border-1 border-transparent
               hover:border-white hover:rounded-3xl hover:border-2 transition-all duration-300"
                style={{backgroundImage: `url(${x})`}}>
            </button>

            <button
                className="w-12 h-12 bg-center bg-cover border-1 border-transparent
               hover:border-white hover:rounded-3xl hover:border-2 transition-all duration-300"
                style={{backgroundImage: `url(${google})`}}>
            </button>

            <button
                className="w-12 h-12 bg-center bg-cover border-1 border-transparent
               hover:border-white hover:rounded-3xl hover:border-2 transition-all duration-300"
                style={{backgroundImage: `url(${fb})`}}>
            </button>
        </div>
    )
}