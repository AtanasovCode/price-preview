

const Card = ({ data, type }) => {

    const { price, storage, users, send } = data[type.toLowerCase()];

    return (
        <div className="bg-card flex items-center justify-center flex-col rounded-lg px-4 py-10">
            <div className="text-text font-bold mb-4">
                {type}
            </div>

            <div className="text-6xl font-bold mb-6">
                {price}
            </div>
            <div className="mb-6">
                {storage} Storage
            </div>
            <div className="mb-6">
                {users} Users Allowed
            </div>
            <div className="mb-10">
                Send up to {send} GB
            </div>

            <div className="w-full">
                <input 
                    type="button"
                    value="Learn More"
                    className="uppercase font-2xl font-medium text-white w-full p-3 cursor-pointer 
                    bg-btn-bg hover:bg-sky-600"
                />
            </div>
        </div>
    );
}

export default Card;