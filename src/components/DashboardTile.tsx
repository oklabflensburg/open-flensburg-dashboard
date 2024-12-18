import React from 'react';

interface DashboardTileProps {
    title: string;
    description: string;
    bgColor: string;
    fontColor: string;
    themeIconUrl: string;
    option?: any;
    children?: React.ReactNode;
}

const DashboardTile: React.FC<DashboardTileProps> = ({ title, description, bgColor, fontColor, themeIconUrl, option, children }) => {
    return (
        <div className={`${bgColor} m-16 p-8 w-full rounded flex-col`}>
            <img className="h-[45px] float-right" src={themeIconUrl} alt="themeicondescription" />
            <div className='flex flex-col items-center md:flex-row'>
                <div className="float-left flex flex-col justify-between p-4 leading-normal">
                    <h2 className={`${fontColor} text-left mb-4 text-7xl font-inter tracking-tight text-gray`}>{title}</h2>
                    <p className="text-gray text-left text-2xl">{description}</p>
                </div>
            </div>
            <div className="h-[300px] min-h-[300px]" >
                {children}
            </div>
            <div className="block flex">
                <p className="text-gray mr-4 text-sm">Datenstand: </p>
                <img className="h-[16px] mr-2" src="./icons/more-icon.webp" />
                <a className="text-gray text-sm" href="">Mehr erfahren</a>
            </div>
        </div>

    );
};

export default DashboardTile;
