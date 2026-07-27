const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">


            <div className="fixed w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] top-0 left-0 opacity-30"></div>

            <div className="fixed w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] bottom-0 right-0 opacity-30"></div>

            <div className="relative z-10">
                <div className="p-2 bg-base-300 justify-items-center">
                    <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
                </div>
                
                <div className="ml-5 mt-20 flex text-center">

                    <p>
                        At <strong>DevTinder</strong>, we respect your privacy. This demo application
                        collects basic information such as your name, email, profile photo, bio, and
                        skills to create your developer profile and enable connection requests with
                        other users.
                        We do not sell or share your personal information with third parties. Your
                        information is used only to provide the features of this application.
                        As this is a learning and demonstration project, the application is not
                        intended for storing sensitive personal information.
                        By using DevTinder, you agree to this Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;