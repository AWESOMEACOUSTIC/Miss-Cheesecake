import { FaInstagram as InstagramIcon } from 'react-icons/fa';

const Card = ({
    content,
    highlighted,
    imageSrc,
    name,
    handle,
    subtitle,
}) => {
    // split first 10 words vs rest
    const words = content.trim().split(/\s+/);
    const firstTen = words.slice(0, 10).join(' ');
    const rest = words.slice(10).join(' ');

    return (
        <div
            className={`
        flex p-2  w-full rounded-xl  overflow-hidden
        transition-opacity gap-x-1 lg:gap-x-10 duration-500
        ${highlighted ? 'opacity-100 filter-none' : 'opacity-30 filter'}
      `}
        >
            <div className="w-[30vw] lg:w-[34vw] space-y-19 p-2">
                <p className="text-base leading-[0.39em] xl:leading-relaxed h-[12vw]">
                    <span className="text-black text-[0.39em] xl:text-[0.98vw] font-[satoshi]">{firstTen}</span>
                    {rest && (
                        <>
                            {' '}
                            <span className="text-[#8F8C8C] text-[0.39em] xl:text-[0.98vw] font-[satoshi]">{rest}</span>
                        </>
                    )}
                </p>

                <div className="mt-6 flex flex-col items-center justify-start">
                    <div className='flex gap-x-2 w-full items-center'> 
                        <span className="font-semibold text-[0.62em] md:text-[0.91em] text-start font-[satoshi]">{name}</span>
                        <span className="flex items-center justify-center py-1 px-1 will-change-contents font-[satoshi] xl:w-[6.92vw] text-center rounded-[1vw] xl:rounded-[0.31vw] text-black border text-[0.5em] xl:text-[0.68vw]">
                            <InstagramIcon className="w-3 h-3 mr-1 fill-current" />
                            {handle}
                        </span>
                    </div>
                    <div className='flex justify-start w-full'>
                        {subtitle && (
                            <p className="mt-1 text-[0.54em] md:text-[0.74em] font-[saans] text-start text-sm text-[#8F8C8C]">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            
            {imageSrc && (
                <div className="w-[40vw] h-[27vw] xl:w-[30vw] xl:h-[23vw]">
                    <img
                        src={imageSrc}
                        alt={`${name} testimonial`}
                        className="object-cover h-full w-full rounded-[2vw]"
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
