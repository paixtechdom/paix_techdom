
import person from './img/person.jpg'
import education from './img/image.jpg'
import shoe from './img/images_(15)-transformed.png'
import organization from './img/organization.jpg'
import blog from './img/images (6).jpeg'
import img5 from './img/design.jpeg'
import img6 from './img/images (9).jpeg'
import img7 from './img/maintenance.jpeg'
import img8 from './img/image.jpg'


const Navs = [
    {
        name:'Home',
        icon:'house',
        link:'Home',
    },
    {
        name:'About',
        icon:'person',
        link:'About',
    },
    {
        name:'Services',
        icon:'hdd-stack',
        link:'Services',
    },
    // {
    //     name:'Consultancy',
    //     icon:'person',
    //     link:'',
    // },
    {
        name:'Pricing',
        icon:'tags',
        link:'Pricing',
    },
    {
        name:'Blog',
        icon: 'file-earmark-richtext',
        link:'Blog',
    },
    {
        name:'Contact',
        icon:'telephone',
        link:'Contact',
    },
]

const AboutInfo = {
    homePageBeforeHeader: "You're just in time & at the right place...",
    // homePageHeader: 'Ready to elevate your digital journey?',
    homePageHeader: 'Website development company for your',
    homePageHeaderFor: [
        {
            text: 'e-store',
            color: 'text-orange-400',
            img: shoe
        },
        {
            text: 'business',
            color: 'text-blue-400',
            img: organization
            // buy and sell img
        },
        {
            text: 'blog',
            color: 'text-yellow-300',
            img: blog
        },
        {
            text: 'portfolio',
            color: 'text-green-400',
            img: person
        },
        {
            text: 'online learning',
            color: 'text-red-400',
            img: education
        },
    ],
    homePageIntro : "Scale up your website and transform your ideas into captivating online experiences. Unleash the power of innovative web solutions with Paix Techdom.",
    // Let's create something exceptional,

    title: 'Welcome to Paix Techdom',
    p1: ' where innovation meets expertise in the ever-evolving realm of web development. Founded on the belief that a strong digital presence is the cornerstone of success, we embark on a mission to transform visions into interactive, cutting-edge realities.',
    p2: 'At Paix Techdom, we pride ourselves on being architects of the digital landscape, weaving together code, creativity, and commitment to deliver unparalleled web solutions. Our journey is fueled by a passion for pushing boundaries, embracing challenges, and staying at the forefront of technological advancements.',
    question: 'Why Choose Paix Techdom?',
    
    reasons: [
        {
            title: 'End-to-End Solutions',
            desc: "From conceptualization to deployment and beyond, we offer end-to-end web development solutions. Whether you're a startup looking for a digital presence or an enterprise aiming for a technological overhaul, we've got you covered."
        },
        {
            title: 'Innovation at the Core',
            desc: "Innovation is not just a buzzword for us; it's a commitment. We leverage the latest technologies and industry best practices to create solutions that not only meet but exceed expectations."
        },
        {
            title: 'Client-Centric Approach',
            desc: 'Your success is our success. We prioritize understanding your unique goals and challenges, tailoring our services to suit your specific needs. Collaboration is at the heart of what we do.'
        },
        {
            title: 'Expertise That Matters',
            desc: 'Our team of seasoned developers, designers, and strategists brings a wealth of experience to every project. From responsive websites to complex web applications, we thrive on turning concepts into dynamic, functional realities.',
        },
        {
            title: 'Transparent Communication',
            desc: 'Communication is key in any successful partnership. We value transparency, keeping you informed at every stage of the development process. Your feedback guides us, ensuring the final product aligns seamlessly with your vision.'
        }
    ],
    footTitle: 'Join Us on the Digital Frontier',
    pfoot: "As we continue to navigate the ever-changing digital landscape, Paix Techdom remains committed to crafting digital excellence. Join us on this journey, where your ideas meet our expertise, and together, we build the digital future. Let's innovate, inspire, and transform the way the world experiences the web."
}

const numbers = [
    {
        title: 'years',
        img: 'clock-history',
        no: 3,
        speed: 200
    },
    {
        title: 'Clients',
        img: 'people',
        no: 50,
        speed: 50
    },
    {
        title: 'projects',
        img: 'journal-text',
        no: 20,
        speed: 100
    },
    {
        title: 'Partners',
        img: 'person-plus',
        no: 500,
        speed: 10
    },
]

const AfterHero = [
    {
        title: 'Gain ground in your niche',
        icon: 'people',
        desc: 'A website developed by us positions your business as a leader in its field, excelling at what it does best.'
    },
    {
        title: 'Generate more leads',
        icon: 'people',
        desc: 'Your website becomes a powerful tool to capture interest, drawing in a larger audience and increasing potential customer inquiries.'
    },
    {
        title: 'Grow your awareness',
        icon: 'people',
        desc: 'Through a strategically designed website, more people become acquainted with and recognize your brand, enhancing overall awareness.'
    },
    {
        title: 'Gain access to more clients',
        icon: 'people',
        desc: 'Your website serves as a gateway to connect with new customers, enabling the expansion of your business reach and clientele.'
    },
    {
        title: 'Grab more grant oppurtunities',
        icon: 'hold',
        desc: ' With an impactful online presence, your chances of securing additional support or funding for your projects are heightened.'
    },
    
    {
        title: 'Grow your wings',
        icon: 'people',
        desc: 'Our website development ensures that your business not only grows but soars to new heights, achieving success in exciting and dynamic ways.'
    },
]

const ServicesInfo = [
    {
        title: 'Website Development',
        desc: 'Elevate your online presence with our expert website development services. We craft visually stunning and user-friendly websites tailored to your brand, ensuring a seamless digital experience for your audience.',
        icon: 'laptop'
    },
    {
        title: 'Web Apps',
        desc: 'Experience the power of interactive web applications with our customized solutions. From dynamic forms to real-time updates, we leverage cutting-edge technologies to enhance user engagement and functionality on your website',
        icon: 'phone'
    },
    {
        title: 'SEO (Search Engine Optimization)',
        desc: "Boost your online visibility and climb the search engine ranks. Our SEO services optimize your websites's content and structure, driving organic traffic and ensuring that your business stands out in the digital landscape.",
        icon: 'search'
    },
    {
        title: 'Website Maintenance',
        desc: 'Secure the longetivity of your online presence with our comprehensive website maintenance services. We handle updates, security patches, and performance enhancements, allowing you to focus on your business while we take care of the technical details.',
        icon: 'wrench'
    },
    {
        title: 'E-Commerce solutions',
        desc: 'Unleash the potential of online selling with our tailored e-commerce solutions. We create robust, secure and user-friendly online stores that not only showcase your products but also provide a seamless and secure shopping experience for your customers.',
        icon: 'shop'
    },
    {
        title: 'Training and Tutoring',
        desc: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape.",
        icon: 'award'
    }
]

const ContactInfo = [
    {
        title: 'Whatsapp',
        icon: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=2347063730930'
    },
    {
        title: 'Email',
        icon: 'envelope',
        link: 'mailto:paixtechdom@gmail.com'
    },
    {
        title: 'Phone',
        icon: 'telephone',
        link: 'tel:+2347063730930'
    },

    {
        title: 'Facebook',
        icon: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=1000091611065721'
    },
    {
        title: 'Instagram',
        icon: 'instagram',
        link: 'https://instagram.com/paix_techdom?utm_source=qr&igshid=YzU1NGVIODEzOA%3D%3D'
    },
]

const Testimonials = [
    {
        name: 'Mr Olamide',
        organization: 'Eduaid Consult',
        comment: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape",
        rating: 4
    },
    {
        name: 'Mr No idea',
        organization: 'Food eating company',
        comment: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape",
        rating: 5
    },
    {
        name: 'Timothy Akanbi',
        organization: 'Christ Liberty Assembly',
        comment: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape",
        rating: 4
    },
    {
        name: 'Four Mr So and so',
        organization: 'Food eating company',
        comment: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape",
        rating: 4.2
    },
]
const Prices = [
    {
        title: 'Basic Plan',
        features: [
            'Responsive and mobile-friendly website design',
            'Search Engine Optimization (SEO)',
            'Up to 5 pages',
            'Contact form integration',
            'Social media integration',
            'Standard Security measures',
            '1 year free maintenance'
        ],
        price: 250,
        // price: 550,
    },
    {
        title: 'Standard Plan',
        features: [
            'All features from the Basic Plan',
            'Customized design to match brand identity',
            'Up to 15 pages with additional content options (e.g portfolio, blog)',
            'Content management system (WordPress)',
            'Basic e-commerce functionality (up to 20 products)',
            'Performance optimization',
        ],
        // price: 1200,
        price: 700,
    },
    {
        title: 'Premium Plan',
        features: [
            'All features from the Standard Plan',
            'Unlimited pages and content options',
            'E-commerce functionality for unlimited products',
            'Custom web applications or features',
            'Enhanced security measures',
            'Priority support and maintenance'
            ],
        price: 1000,
        // price: 2500,
    },
]

const ourOfffers = [
    {
        name: 'Design',
        desc: 'Our design services are tailored to elevate your brand and captivate your audience. Our commitment is to bring your vision to life through thoughtful and ijmpactful design solutions that set your business apart in a crowded digital landscape',
        img: img5,
        icon: 'house-fill',
        wedo: 'We design',
        subOffers: [
            {
                name: 'websites that match your brand identity',
                icon: 'phone'
            },
            {
                name: 'Mobile First Designs',
                icon: 'phone'
            },
            {
                name: 'Responsive designs',
                icon: 'laptop'
            },
            {
                name: 'Redesign existing websites',
                icon: 'telephone'
            }
        ]
    },
    {
        name: 'Development',
        desc: 'Experience the power of interactive web applications with our customized solutions. From dynamic forms to real-time updates, we leverage cutting-edge technologies to enhance user engagement and functionality on your website',
        img: img6,
        icon: 'person-fill',
        wedo: 'We develop',
        subOffers: [
            {
                name: 'Website and web apps',
                icon: 'laptop'
            },
            {
                name: 'E-Commerce Solutions',
                icon: 'shop'
            },
           
            {
                name: 'Portfilio, Blogs, e.t.c ',
                icon: 'file'
            },
            {
                name: 'Custom websites',
                icon: 'phone'
            },
           
        ]
    },
    {
        name: 'Maintenance',
        desc: 'Secure the longetivity of your online presence with our comprehensive website maintenance services. We handle SEO updates, security patches, and performance enhancements, allowing you to focus on your business while we take care of the technical details.',
        img: img7,
        icon: 'gear',
        wedo: 'We offer',
        subOffers: [
            {
                name: 'SEO (Search Engine Optimization)',
                icon: 'search'
            },
            {
                name: 'Customer support',
                icon: 'people'
            },
            {
                name: '24/7 Technical Suppport',
                icon: 'clock'
            },
            {
                name: 'Web maintenance',
                icon: 'wrench'
            },
        ]
    },
    {
        name: 'Training',
        desc: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape.",
        img: img8,
        icon: 'award',
        wedo: 'We give training on',
        subOffers: [
            {
                name: 'Web design',
                icon: 'instagram'
            },
            {
                name: 'Web development (frontend)',
                icon: 'instagram'
            },
            {
                name: 'web development basics',
                icon: 'instagram'
            },
            // {
            //     name: 'Education',
            //     icon: 'instagram'
            // },
         
        ]
    }
]
const BlogNavs = [
    {
        name:'Home',
        icon:'house',
        link:'',
    },
    {
        name:'Tech',
        icon:'person',
        link:'About',
    },
    {
        name:'Career',
        icon:'hdd-stack',
        link:'Services',
    },
    {
        name:'Tools',
        icon:'tags',
        link:'Pricing',
    },
    {
        name:'Lifestyle',
        icon: 'file-earmark-richtext',
        link:'Blog',
    },
    {
        name:'Contact',
        icon:'telephone',
        link:'Contact',
    },
]

const Blogs = [
    {
        title: 'Tech 1 ignissimos cumque fuga qui quibusdam quia',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '12 July, 2023',
        img: img5,
        id: 'latestBlog',
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tech'
        
    },
    {
        title: 'Career 2 optio tempore voluptas quia',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '13 Aug, 2023',
        img: img6,
        id: 'blog2',
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Career'
                
        
    },
    {
        title: 'Tools 3 optio tempore voluptas dignissimos cu',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '14 Sept, 2023',
        id: 'blog3',
        img: img7,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tools'
        
        
    },
    {
        title: 'Education 4 optio tempore voluptcumq',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '15 Oct, 2023',
        id: 'blog4',
        img: img8,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Education'

    },
    {
        title: 'Techie 5 optio temp voluptacu',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '14 Sept, 2023',
        id: 'blog3',
        img: img7,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tech'
        
        
    },
    {
        title: 'Toolsie 6 optio tempore voluptas dignissimos cumq',
        desc: 'Elevate your online presence with this anf that and that and ldnsoifn;soinsbfo ofnojsf sofnoak osnfoi sonsoin ',
        date: '15 Oct, 2023',
        id: 'blog4',
        img: img8,
        content: [
            'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.', 
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.',
            'Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.',
            'Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.'
        ],
        noComments: 24,
        noLikes: 200,
        section: 'Tools'

    },
]
const BlogTypes = [
    {
        title: 'Tech',
        icon: 'gear-fill',
        bg: 'blue'
    },
    {
        title: 'Tools',
        icon: 'tools',
        bg: 'black'
    },
    {
        title: 'Education',
        icon: 'book-fill',
        bg: 'blue-900'
    },
    {
        title: 'Career',
        icon: ' person-badge-fill',
        bg: 'gray-900'
    },
]
export { Navs, AfterHero, numbers, ourOfffers , AboutInfo, ServicesInfo, ContactInfo, Prices, Blogs, Testimonials, BlogNavs, BlogTypes }






