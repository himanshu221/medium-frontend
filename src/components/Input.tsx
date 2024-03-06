interface PropTypes {
    type: string,
    placeholder: string,
    refer: React.RefObject<HTMLInputElement>
}
export const InputBox = (props : PropTypes) => {
    return <div className='relative w-full p-4 z-10'>
        <input ref={props.refer} className='bg-neutral-950 text-neutral-400 w-full border border-slate-800 outline-none text-md p-2 rounded-lg' type={props.type} placeholder=" "/>
        <span className="input-text transition duration-500 p-1 absolute left-6 top-5 text-md text-[#334155] text-opacity-80">{props.placeholder}</span>
    </div>
}