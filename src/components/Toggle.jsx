const Toggle = ({ toggle, pricing }) => {

    const position = pricing === "monthly" ? "translate-x-6" : "translate-x-1";

    return (
        <div className="flex items-center justify-center">
            <div className="mr-3 text-text text-sm">Annually</div>
            <div
                className="
                w-12 h-6 bg-lightGrayishBlue rounded-2xl cursor-pointer mr-3
                relative flex items-center
            "
                onClick={() => toggle()}
            >
                <div
                    className={`h-[80%] w-[40%] rounded-full bg-background 
                ${position} transition-all duration-500 `}
                >
                </div>
            </div>
            <div className="text-text text-sm">Monthly</div>
        </div>
    );
}

export default Toggle;