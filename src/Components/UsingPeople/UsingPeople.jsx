
const UsingPeople = () => {
    return (
        <div className="my-10">
            <section>
                <h2 className="text-center font-bold text-lg md:text-2xl">Who Can Benefit from Our Website?</h2>
                <p className="text-center text-slate-700 px-9 lg:px-80 mb-5 text-xs md:text-base">Our task management website is designed to serve the needs of various individuals and professionals, including:</p>

                <div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Developers</h2>
                            <p className="text-gray-700"> Manage and organize coding tasks, track project timelines, and collaborate with team members.</p>

                        </div>

                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Corporate Professionals</h2>
                            <p className="text-gray-700"> Improve team collaboration, enhance productivity, and ensure timely completion of tasks.</p>
                        </div>

                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Project Managers</h2>
                            <p className="text-gray-700"> Streamline project workflows, assign tasks, and track project progress efficiently.</p>
                        </div>

                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Entrepreneurs</h2>
                            <p className="text-gray-700"> Organize and prioritize business tasks, set goals, and monitor project milestones.</p>
                        </div>
                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Students</h2>
                            <p className="text-gray-700"> Keep track of assignments, deadlines, and project timelines to stay organized and focused on studies.</p>
                        </div>

                        <div className="bg-slate-200 p-5 rounded-lg shadow-xl">
                            <h2 className="text-xl font-semibold">Freelancers</h2>
                            <p className="text-gray-700"> Manage multiple projects, set deadlines, and collaborate with clients for seamless project delivery.</p>
                        </div>
                       
                    </div>


                </div>
            </section>
        </div>
    );
};

export default UsingPeople;