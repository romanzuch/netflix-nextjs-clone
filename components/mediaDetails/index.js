export default function MediaDetails(props) {
    return (
        <div className='absolute z-50 w-[95vw] h-[70vh] bg-slate-400 rounded-md flex flex-col overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
            <h1 className='text-4xl'>{props.id}</h1>
            <button onClick={() => {props.router.back()}}>Close</button>
        </div>
    )
}