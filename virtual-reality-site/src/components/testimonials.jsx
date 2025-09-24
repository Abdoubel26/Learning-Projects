import { testimonials } from "../constants";

export default function TestimonialsSec(){
    return(
        <div className="flex flex-col items-center justify-center pb-10">
            <h1 className="text-4xl text-center pt-7">What People are Saying</h1>
            <div className="flex flex-wrap mt-3 justify-center items-center ">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="border border-neutral-800 flex flex-col mx-3 my-2 p-4 lg:w-[30%] md:w-[40%]">
                    <div className="">
                        <p className="p-3 text-neutral-400">{testimonial.text}</p>
                    </div>
                    <div className="flex">
                        <img src={testimonial.image} className="rounded-full w-11 h-11 mx-3"></img>
                        <div>
                            <p className="text-orange-400 font-semibold">{testimonial.user}</p>
                            <p className="text-neutral-600 italic">{testimonial.company}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}