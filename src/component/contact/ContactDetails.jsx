import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Wadamukhwadi, Pune, India ',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'vedantnawale0@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '7620005945',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-3/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<h3 className=' text-xl'>Let's Work Together</h3>
                    <p className=' my-4 text-justify'>Together, we can create a better future, whether it's in our personal endeavors, professional
                        projects, or larger societal efforts. Let's embark on this journey of collaboration and make a
                        difference together.</p>
				<ul className="font-general-regular pt-4">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>

				<p className='text-lg text-gray-600 pt-4'>@2024, PortFolio by Vedant Nawale</p>
			</div>
		</div>
	);
};

export default ContactDetails;