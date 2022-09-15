import PhoneIcon from "../../Assets/icons/phone.svg"

function PhoneNumber({textColor, classd = ""}) {
    return (  
        <a href="tel:+78007006129" className={`phoneBlock flex ${classd} justify-center items-center`}>
            <div className="phoneIconBg bg-blue-b5 transition-all w-6 h-6 rounded-[5px] flex justify-center items-center mr-3">
                <img className="phoneIcon w-3 h-3" src={PhoneIcon}></img>
            </div>
            <a className={`${textColor}`}>8(812)334-72-12</a>
        </a>
    );
}

export default PhoneNumber;