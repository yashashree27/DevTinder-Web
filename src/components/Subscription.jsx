import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Subscription = () => {

    const handleBuyClick = async (type) => {
        try {
            const order = await axios.post(
                BASE_URL + "/payment/createOrder",
                { membershipType: type },
                { withCredentials: true }
            );

            console.log("Order Response:", order.data);

            const { amount, currency, keyId, orderId, notes } = order.data;

            const options = {
                key: keyId,
                amount,
                currency,
                name: "DEV TINDERY",
                description: "Connection with developers",
                order_id: orderId,
                prefill: {
                    name: `${notes.firstName} ${notes.lastName}`,
                    email: notes.emailId,
                    contact: "9999999999",
                },
                theme: {
                    color: "#F37254",
                },
            };



            const rzp = new window.Razorpay(options);

            rzp.open();

        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div className="m-10">
            <div className="flex w-full">
                <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                    <h1 className="font-bold text-2xl">Silver Membership</h1>

                    <ul>
                        <li>- Chat with other people</li>
                        <li>- 100 connection requests per day</li>
                        <li>- Blue tick</li>
                        <li>- 3 months</li>
                    </ul>

                    <button
                        onClick={() => handleBuyClick("silver")}
                        className="btn btn-primary"
                    >
                        Buy Silver
                    </button>
                </div>

                <div className="divider divider-horizontal">OR</div>

                <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                    <h1 className="font-bold text-2xl">Gold Membership</h1>

                    <ul>
                        <li>- Chat with other people</li>
                        <li>- Unlimited connection requests per day</li>
                        <li>- Blue tick</li>
                        <li>- Early access to new features</li>
                        <li>- 6 months</li>
                    </ul>

                    <button
                        onClick={() => handleBuyClick("gold")}
                        className="btn btn-secondary"
                    >
                        Buy Gold
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;