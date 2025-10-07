export default function CoreServices() {
    const services = [
        {
            title: "Business Requirements Gathering",
            subtitle: "Identify and document your business needs clearly",
            description:
                "Drive successful project outcomes by understanding what matters most.",
            icon: (
                <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h3.5l2 2H17a2 2 0 012 2v10a2 2 0 01-2 2z"
                    />
                </svg>
            ),
        },
        {
            title: "Process Mapping & Optimization",
            subtitle: "Visualize and improve processes effectively",
            description:
                "Increase efficiency and reduce costs with clear process flows.",
            icon: (
                <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h10M3 14h7m-1 9h4.5A1.5 1.5 0 0014 21.5v-3m4-14h.01M19 21h-2a1 1 0 110-2h2a1 1 0 110 2z"
                    />
                </svg>
            ),
        },
        {
            title: "Digital Transformation Support",
            subtitle: "Upgrade technology with expert guidance",
            description:
                "Align technology changes with your strategic business goals.",
            icon: (
                <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 11V7a4 4 0 014-4h4v4a4 4 0 01-4 4h-4zm0 0v4a4 4 0 004 4h4v-4a4 4 0 00-4-4h-4zm-6 8a4 4 0 004-4v-4H5v4a4 4 0 004 4z"
                    />
                </svg>
            ),
        },
        {
            title: "Change Management & Stakeholder Engagement",
            subtitle: "Ensure smooth transitions and buy-in",
            description:
                "Manage change effectively with clear stakeholder communications.",
            icon: (
                <svg
                    className="h-8 w-8  flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 8h10M7 12h8m-8 4h6"
                    />
                </svg>
            ),
        },
        {
            title: "Tender & Bid Support",
            subtitle: "Compelling bids to win contracts",
            description:
                "Expert preparation to secure government and private sector tenders.",
            icon: (
                <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-5 0-9 4-9 9h18c0-5-4-9-9-9zM12 8V6m-4 4h8"
                    />
                </svg>
            ),
        },
        {
            title: "Additional Consulting Services",
            subtitle: "Tailored solutions for unique challenges",
            description:
                "Flexible consulting to address your specific business needs.",
            icon: (
                <svg
                    className="h-8 w-8 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-[#0A3D62] text-center mb-3">
                        Our Core Services
                    </h2>
                    <p className="text-[#0A3D62] text-lg">
                        Comprehensive consultancy offerings designed to accelerate your business success.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {services.map(({ title, subtitle, description, icon }) => (
                        <article
                            key={title}
                            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col"
                        >
                            <div className="items-start space-x-4 mb-3">
                                <div className="text-[#f1170c] flex-shrink-0">{icon}</div>
                            </div>
                            <div className='items-start'>
                                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                <p className="text-gray-700 font-medium">{subtitle}</p>
                            </div>
                            <p className="text-gray-700 flex-grow">{description}</p>
                            {/* <div className="mt-6">
                                <button
                                    type="button"
                                    className="rounded-md bg-[#FF6B35] px-4 py-2 font-semibold text-white transition hover:bg-[#e05b2a]"
                                >
                                    Learn More
                                </button>
                            </div> */}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}