
import person from './img/person.jpg'
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
        icon:'house-fill',
        link:'',
    },
    {
        name:'About Us',
        icon:'person-fill',
        link:'About',
    },
    {
        name:'Our Services',
        icon:'hdd-stack-fill',
        link:'Services',
    },
    // {
    //     name:'Consultancy',
    //     icon:'person',
    //     link:'',
    // },
    {
        name:'Pricing',
        icon:'tags-fill',
        link:'Pricing',
    },
    // {
    //     name:'Blog',
    //     icon: 'file-earmark-richtext',
    //     link:'Blog',
    // },
    {
        name:'Get a Quote',
        icon:'card-list',
        link:'Quote',
    },
    // {
    //     name:'Contact Us',
    //     icon:'telephone',
    //     link:'Contact',
    // },
]
// TARGET AUDIENCE - those who need website for online presence or to redesign
//                 - those who need a custom solution
const HeroContent = [
    {
        // header: 'Are clients really scarce?',
        header: 'Ready to scale up your business with digital automations?',
        // text: ['Are you ready to leave the stage of not getting new clients?', 
        text: [
            'Are you ready bring your business to light and leave the stage of not getting new clients?', 
            'Let us to handle your online presence and experience a drastic increase in your revenue.'
        ],
        color: 'text-blue-400',
        img: businessImg
    },
    {   
        header: 'Try out our free packages',
        text: ['Start now and get access to free addiional packages all for your business and organization to generate more leads and revenue.'],
        color: 'text-orange-400',
        img: estore
    },
    {
        header: 'Try out a website tailored for your brand',
        text: ['We adhere to developing a website whose design, content and functionality is tailored to your needs.'],
        color: 'text-yellow-300',
        img: blog
    },
    {
        header: 'Missing business oppurtunities like grants and more?',
        text: ['Start now to get more oppurtunities attracted to your organization.'],
        color: 'text-red-400',
        img: portfolioImg
    },
]

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
        no: 13,
        speed: 50
    },
    {
        title: 'projects',
        img: 'journal-text',
        no: 15,
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
        desc: 'Through a strategically designed website (SEO Optimized), more people become acquainted with and recognize your brand, enhancing overall awareness.'
    },
    {
        id: 'clients',
        title: 'Gain access to more clients',
        icon: 'check-circle-fill',
        desc: 'Your website serves as a gateway to connect with new customers, enabling the expansion of your business reach and clients.'
    },
    {
        id: 'grant',
        title: 'Grab more oppurtunities',
        icon: 'check-circle-fill',
        desc: 'With an impactful online presence, your chances of securing oppurtunities such as additional support or funding for your projects are heightened.'
    },
    {
        id: 'ground',
        title: 'Gain ground in your niche',
        icon: 'check-circle-fill',
        desc: 'Position your digitally as a leader in its field, excelling at what it does best.'
    },
    
    {
        id: 'wings',
        title: 'Grow your wings',
        icon: 'check-circle-fill',
        desc: 'We ensure your business not only grows but soars to new heights, achieving success in exciting and dynamic ways.'
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
        desc: "We give you the tools and knowledge to thrive in the digital space, putting you in control.",
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
        desc: "We're committed to continuous improvement, adapting to your needs as we grow your revenue together.",
        icon: 'sort-up-alt',
        id: 'aldmvlkw'
    },

]

const ServicesInfo = [
    {
        id: 'sfnflan',
        title: 'Website Design',
        desc: 'Our design services are tailored to elevate your brand and captivate your audience. Our commitment is to bring your vision to life through thoughtful and impactful design solutions that set your business apart in a crowded digital landscape.',
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
    // {
    //     icon: 'twitter',
    //     link: 'https://instagram.com/paix_techdom?utm_source=qr&igshid=YzU1NGVIODEzOA%3D%3D'
    // },
  
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
            'Customized design to match brand identity',
            'Search Engine Optimization (SEO)',
            'Up to 10 pages',
            'Contact form integration',
            'Social media integration',
            'Standard free Security measures',
            '1 year free maintenance'
        ],
        price: 300,
        // price: 550,
    },
    {
        title: 'Standard Plan',
        icon: 'diamond',
        features: [
            'All features from the Basic Plan',
            'Up to 15 pages with additional content options (e.g portfolio, blog)',
            'Content management system (WordPress)',
            'Basic e-commerce functionality (up to 20 products)',
            'Performance optimization',
            'Priority support and maintenance'
        ],
        // price: 1200,
        price: 850,
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
            ],
        price: 1400,
        // price: 2500,
    },
]

const Questions = [
    {   
        id: 'queswopr',
        icon: 'patch-question-fill',
        title: 'How long does it take to get a website?',
        desc: 'A minimum of three days, but it also depends on the complexity of the project and how quick you provide the requirements to get started.'
    },
    {
        id: 'queswrrrer',
        icon: 'patch-question-fill',
        title: 'What do I gain from having a website?',
        desc: 'A website is a powerful tool used for various purposes, ranging from getting your business or organization to '
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





export { Navs, Gain, numbers, ServicesInfo, ContactInfo, Prices, Testimonials, HeroContent, ValuesInfo, Questions }






