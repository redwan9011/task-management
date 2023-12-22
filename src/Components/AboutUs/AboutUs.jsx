

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto mb-8 px-5 md:px-8 lg:px-0">
            <div>
                <h1 className="text-center font-bold text-3xl mt-5 mb-2">About Us</h1>
                <p className="text-center text-slate-500 px-3 md:px-24 lg:px-56 mb-8 text-xs md:text-sm  lg:text-base">Welcome to our Task Management Website , your ultimate solution for efficient and organized task management. We understand the challenges of juggling multiple responsibilities, projects, and deadlines, and we are here to make your life easier.</p>
            </div>
            <div>
                <h1 className="text-center font-bold text-3xl mt-5 mb-5">Why Choose Us?</h1>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    Flexibility
                    </div>
                    <div className="collapse-content">
                        <p>Whether you are a solo entrepreneur, a small business, or part of a large team, our platform adapts to your unique needs.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 my-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Security
                    </div>
                    <div className="collapse-content">
                        <p>Your data is important to us. We prioritize the security and privacy of your tasks and projects.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Constant Innovation
                    </div>
                    <div className="collapse-content">
                        <p>We are committed to continuous improvement. Expect regular updates and new features to enhance your task management experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;