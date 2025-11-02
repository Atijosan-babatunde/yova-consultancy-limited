import { ChartBarSquareIcon, ClipboardDocumentListIcon, ComputerDesktopIcon, DocumentCheckIcon, IdentificationIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function CoreServices() {
    const services = [
        {
            title: "Business Requirements Gathering",
            subtitle: "Identify and document your business needs clearly",
            description:
                "Drive successful project outcomes by understanding what matters most.",
            icon: (
                <ClipboardDocumentListIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
            ),
        },
        {
            title: "Process Mapping & Optimization",
            subtitle: "Visualize and improve processes effectively",
            description:
                "Increase efficiency and reduce costs with clear process flows.",
            icon: (
                <ChartBarSquareIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
            ),
        },
        {
            title: "Digital Transformation Support",
            subtitle: "Upgrade technology with expert guidance",
            description:
                "Align technology changes with your strategic business goals.",
            icon: (
                <ComputerDesktopIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
            ),
        },
        {
            title: "Change Management & Stakeholder Engagement",
            subtitle: "Ensure smooth transitions and buy-in",
            description:
                "Manage change effectively with clear stakeholder communications.",
            icon: (
                <UsersIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
            ),
        },
        {
            title: "Tender & Bid Support",
            subtitle: "Compelling bids to win contracts",
            description:
                "Expert preparation to secure government and private sector tenders.",
            icon: (
                 <DocumentCheckIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
            ),
        },
        {
            title: "CV Review Services",
            subtitle: "Our CV Review and Interview Coaching service is designed to help clients craft powerful, confident, and career-ready profiles that stand out to employers",
            description:
                "Helping professionals present their best selves on paper — and in person.",
            icon: (
                <IdentificationIcon className="h-8 w-8 text-[#F1170C] flex-shrink-0" />
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
                        Trusted consultancy services helping organizations across the UK define, optimize, and deliver lasting solutions.
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