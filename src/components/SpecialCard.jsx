

const SpecialCard = ({ data, type }) => {

    const { price, storage, users, send } = data[type.toLowerCase()];

    return (
        <div className="bg-card-pro md:h-[110%] flex items-center justify-center flex-col rounded-lg px-4 py-10 text-text-pro-card">
            <div className="font-bold mb-4">
                {type}
            </div>

            <div className="text-6xl font-bold mb-6">
                {price}
            </div>
            <div className="mb-6 font-medium">
                {storage} Storage
            </div>
            <div className="mb-6 font-medium">
                {users} Users Allowed
            </div>
            <div className="mb-10 font-medium">
                Send up to {send} GB
            </div>

            <div className="w-full">
                <input
                    type="button"
                    value="Learn More"
                    className="uppercase font-2xl font-medium text-white w-full p-3 cursor-pointer
                    bg-gradient-to-r from-btn-pro-gradient-start to-btn-pro-gradient-end
                    hover:from-transparent hover:to-transparent
                    hover:bg-sky-700"
                />
            </div>
        </div>
    );
}

export default SpecialCard;