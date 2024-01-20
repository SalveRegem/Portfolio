


const Divider = ({text}) => {
    return(
        <span className="relative flex justify-center ">
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
            ></div>
            <span className="relative z-10 text-slate-200 px-6 color">
                {text}
            </span>
        </span>

    )
}

export default Divider