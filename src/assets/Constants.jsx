
import person from './img/person.jpg'
// import education from './img/image.jpg'
import education from './img/examImg.png'
import estore from './img/estore.png'
import businessImg from './img/businessImg.png'
import portfolioImg from './img/portfolioImg.png'

import blog from './img/blogImg.png'
import img5 from './img/design.jpeg'
import img6 from './img/images (9).jpeg'
import img7 from './img/maintenance.jpeg'
import img8 from './img/image.jpg'


const Navs = [
    {
        name:'Home',
        icon:'house',
        link:'',
    },
    {
        name:'About Us',
        icon:'person',
        link:'About',
    },
    {
        name:'Our Services',
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
    // {
    //     name:'Blog',
    //     icon: 'file-earmark-richtext',
    //     link:'Blog',
    // },
    {
        name:'Contact Us',
        icon:'telephone',
        link:'Contact',
    },
]

const HeroContent = [
    {
        // header: 'Are you a business owner desiring more leads?',
        header: 'Ever lost an oppurtunity due not having a website?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum pariatur! Tenetur hic explicabo et iure facilis totam laboriosam saepe!',
        color: 'text-blue-400',
        img: businessImg
    },
    {   
        // header: 'Are you in need of an online store?',
        header: 'Paix Techdom is the right plug for your online presence',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum pariatur! Tenetur hic explicabo et iure facilis totam laboriosam saepe!',
        color: 'text-orange-400',
        img: estore
    },
    {
        header: 'In need of your platform to share your thoughts?',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum pariatur! Tenetur hic explicabo et iure facilis totam laboriosam saepe!',
        color: 'text-yellow-300',
        img: blog
    },
    {
        header: 'We are not in for portfolios',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum pariatur! Tenetur hic explicabo et iure facilis totam laboriosam saepe!',
        color: 'text-green-400',
        img: portfolioImg
    },
    {
        header: 'Paix for your Education',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, voluptatum pariatur! Tenetur hic explicabo et iure facilis totam laboriosam saepe!',
        color: 'text-red-400',
        img: education
    },
]
const AboutInfo = {
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
        no: 4,
        speed: 200
    },
    {
        title: 'Clients',
        img: 'people',
        no: 25,
        speed: 50
    },
    {
        title: 'projects',
        img: 'journal-text',
        no: 38,
        speed: 100
    },
    {
        title: 'Partners',
        img: 'person-plus',
        no: 7,
        speed: 10
    },
]

const Gain = [
    {
        id: 'leads',
        title: 'Generate more leads',
        icon: 'check-circle-fill',
        desc: 'Your website becomes a powerful tool to capture interest, drawing in a larger audience and increasing potential customer inquiries.'
    },
    {
        id: 'awareness',
        title: 'Grow your awareness',
        icon: 'check-circle-fill',
        desc: 'Through a strategically designed website, more people become acquainted with and recognize your brand, enhancing overall awareness.'
    },
    {
        id: 'clients',
        title: 'Gain access to more clients',
        icon: 'check-circle-fill',
        desc: 'Your website serves as a gateway to connect with new customers, enabling the expansion of your business reach and clientele.'
    },
    {
        id: 'grant',
        title: 'Grab more oppurtunities',
        icon: 'check-circle-fill',
        desc: ' With an impactful online presence, your chances of securing oppurtunities such as additional support or funding for your projects are heightened.'
    },
    {
        id: 'ground',
        title: 'Gain ground in your niche',
        icon: 'check-circle-fill',
        desc: 'A website developed by us positions your business as a leader in its field, excelling at what it does best.'
    },
    
    {
        id: 'wings',
        title: 'Grow your wings',
        icon: 'check-circle-fill',
        desc: 'Our website development ensures that your business not only grows but soars to new heights, achieving success in exciting and dynamic ways.'
    },
]

const ValuesInfo = [
    {
        title: 'You First',
        desc: "Your needs are our focus. We're here to ensure you're satisfied every step of the way.",
        icon: 'people-fill',
        id: 'slnd'
    },
    {
        title: 'Empowering Your Online Presence',
        desc: "We give you the tools and knowledge to thrive online, putting you in control.",
        icon: 'lightning-fill',
        id: 'slndsojvpa'
    },
    {
        title: 'Partnering for Success',
        desc: "We work hand in hand, respecting your insights, to achieve remarkable results.",
        icon: 'lightbulb-fill',
        id: 'sasvknlav'
    },
    {
        title: 'Growing Together',
        desc: "We're committed to continuous improvement, adapting to your needs as we grow together",
        icon: 'sort-up-alt',
        id: 'aldmvlkw'
    },

]

const ServicesInfo = [
    {
        id: 'sfnflan',
        title: 'Website Design',
        desc: 'Elevate your online presence with our expert website development services. We craft visually stunning and user-friendly websites tailored to your brand, ensuring a seamless digital experience for your audience.',
        icon: 'laptop'
    },
    {
        id: 'vslnakawj',
        title: 'Website Development',
        desc: 'Experience the power of interactive web applications with our customized solutions. From dynamic forms to real-time updates, we leverage cutting-edge technologies to enhance user engagement and functionality on your website',
        icon: 'tools'
    },
    {
        id: 'knvjnoqldnd',
        title: 'SEO (Search Engine Optimization)',
        desc: "Boost your online visibility and climb the search engine ranks. Our SEO services optimize your websites's content and structure, driving organic traffic and ensuring that your business stands out in the digital landscape.",
        icon: 'search'
    },
    {
        id: 'vlmlknosnf',
        title: 'Website Maintenance',
        desc: 'Secure the longetivity of your online presence with our comprehensive website maintenance services. We handle updates, security patches, and performance enhancements, allowing you to focus on your business while we take care of the technical details.',
        icon: 'wrench'
    },
    {
        id: 'pwrnnfninw',
        title: 'E-Commerce solutions',
        desc: 'Unleash the potential of online selling with our tailored e-commerce solutions. We create robust, secure and user-friendly online stores that not only showcase your products but also provide a seamless and secure shopping experience for your customers.',
        icon: 'shop'
    },
    {
        id: 'siinnqien',
        title: 'Training and Tutoring',
        desc: "Empower your team or yourself with our specialized training and tutoring services. Whether you're looking to master web development or SEO strategies, our experts provide hands-on guidance and knowledge transfer to help you succeed in the digital landscape.",
        icon: 'award'
    }
]


const ourOfffers = [
    // what you stand to gain
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


const ContactInfo = [

    {
        icon: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=2347063730930'
    },
    {
        title: 'paixtechdom@gmail.com',
        icon: 'envelope',
        link: 'mailto:paixtechdom@gmail.com'
    },
      {
        title: '+2347063730930',
        icon: 'telephone',
        link: 'tel:+2347063730930'
    },

    {
        icon: 'facebook',
        link: 'https://www.facebook.com/profile.php?id=1000091611065721'
    },
    {
        icon: 'instagram',
        link: 'https://instagram.com/paix_techdom?utm_source=qr&igshid=YzU1NGVIODEzOA%3D%3D'
    },
    {
        icon: 'twitter',
        link: 'https://instagram.com/paix_techdom?utm_source=qr&igshid=YzU1NGVIODEzOA%3D%3D'
    },
  
]

const Testimonials = [
    {
        name: 'Mr Wheels Tim',
        // organization: 'Eduaid Consult',
        comment: "Outstanding service! Working with Paix Techdom was a breeze. They delivered exacty what we needed for our website redesign, and the results were beyond our expectations. Highly recommend their expertise for anyone in need of a top-notch website",
        rating: 5
    },
    {
        name: 'Mr Oweils',
        organization: 'Saculiet NIG ENT',
        comment: "Paix Techdom took our ideas and turned them into a beautifully designed and fully functional website. Their communication throughout the process was excellent, and they were always quick to address any concerns or changes",
        rating: 4.5
    },
    {
        name: 'Bryan Tane',
        organization: 'Christ Liberty Assembly',
        comment: "Timely delivery and regular updates compliments their service. Paix Techdom is highly recommended. Thank you for your hard work and dedication",
        rating: 5
    },
    {
        name: 'Joshua Olukunle (Dr.)', 
        organization: '',
        comment: "Little did I know that my business leads could increase significantly until I met Paix Techdom. Their service and promptness is at a top level. They were able to capture my vision perfectly and translate it into a website that reflects my brand identity",
        rating: 5
    },
]
const Prices = [
    {
        title: 'Basic Plan',
        icon: 'star',
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
        icon: 'diamond',
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
        icon: 'gem',
        features: [
            'All features from the Standard Plan',
            'Unlimited pages and content options',
            'E-commerce functionality for unlimited products',
            'Custom web applications or features',
            'Enhanced security measures',
            'Priority support and maintenance'
            ],
        price: 1200,
        // price: 2500,
    },
]

const Questions = [
    {   
        id: 'queswopr',
        icon: 'patch-question-fill',
        title: 'How long does it take to get a website?',
        desc: 'Lorem ipsum it dj sfjnf lkanfp fvnsf vlnsf s fvljnsfjlns, dlnalvnalknvlfnsf slfnsjnflsnfl fsvoa'
    },
    {
        id: 'queswrrrer',
        icon: 'patch-question-fill',
        title: '2 How long does it take to get a website?',
        desc: '2 Lorem ipsum it dj sfjnf lkanfp fvnsf vlnsf s fvljnsfjlns, dlnalvnalknvlfnsf slfnsjnflsnfl fsvoa'
    },
    {
        id: 'qwefwfef',
        icon: 'patch-question-fill',
        title: '3 How long does it take to get a website?',
        desc: '3 Lorem ipsum it dj sfjnf lkanfp fvnsf vlnsf s fvljnsfjlns, dlnalvnalknvlfnsf slfnsjnflsnfl fsvoa'
    },
    {
        id: 'qfwdsd',
        icon: 'patch-question-fill',
        title: '4 How long does it take to get a website?',
        desc: '4 Lorem ipsum it dj sfjnf lkanfp fvnsf vlnsf s fvljnsfjlns, dlnalvnalknvlfnsf slfnsjnflsnfl fsvoa'
    },
    {
        id: 'waldsd',
        icon: 'patch-question-fill',
        title: '5 How long does it take to get a website?',
        desc: '5 Lorem ipsum it dj sfjnf lkanfp fvnsf vlnsf s fvljnsfjlns, dlnalvnalknvlfnsf slfnsjnflsnfl fsvoa'
    },
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
export { Navs, Gain, numbers, ourOfffers , AboutInfo, ServicesInfo, ContactInfo, Prices, Blogs, Testimonials, BlogNavs, BlogTypes, HeroContent, ValuesInfo, Questions }






