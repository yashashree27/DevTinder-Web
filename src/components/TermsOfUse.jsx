const TermsOfUse = () => {
    return (
        <div className="min-h-screen relative overflow-hidden">

            <div className="fixed w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] top-0 left-0 opacity-30"></div>

            <div className="fixed w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] bottom-0 right-0 opacity-30"></div>

            <div className="relative z-10">
                <div className="p-2 bg-base-300 justify-items-center">
                    <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
                </div>

                <div className="ml-5 mt-20 flex text-center">
                    <p>
                        Welcome to <strong>DevTinder</strong>. By using this demo
                        application, you agree to use it responsibly and only for
                        lawful purposes. This platform is created for learning and
                        demonstration purposes and its features may change or be
                        removed at any time. Users are responsible for the
                        information they share on their profiles and should avoid
                        posting sensitive or confidential information. By
                        continuing to use DevTinder, you agree to these Terms of
                        Use.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;