interface NotableMentionBase {
  id: string
  title: string
  description: string
  cardImageUrl: string
  cardImageAlt: string
  categories: ('mobile' | 'Web App' | 'general')[]
}
export interface NotableMentionPageElements {
  description: string
  heroImageUrl: string
  heroImageAlt: string
  sectionOne: NotableDataPageSections
  sectionTwo: NotableDataPageSections
  sectionThree: NotableDataPageSections
  multiMobileImgUrl?: string
  multiMobileImgAlt?: string
  contribution: string
  about: string
  aboutImageUrl: string
  aboutImageAlt: string
}

type NotableDataPageSections = {
  heading: string
  headerSpan: string
  description: string
  imageUrl: string
  imageAlt: string
}

export interface NotableMentionMobile extends NotableMentionBase {
  kind: 'mobile'
  pageElements: NotableMentionPageElements
}


interface PageElementsWeb extends Omit<
  NotableMentionPageElements,
  'aboutImageUrl' | 'aboutImageAlt' | 'sectionOne' | 'sectionTwo' | 'sectionThree'
> {
  sectionImages: sectionImagesWeb[]
}
interface NotableMentionWeb extends NotableMentionBase {
  kind: 'web'
  pageElements: PageElementsWeb
}

interface sectionImagesWeb {
  imageUrl: string
  imageAlt: string
  id: number
}
// Omit<NotableMentionPageElements, 'aboutImageUrl' | 'aboutImageAlt' | 'sectionOne' | 'sectionTwo' | 'sectionThree'>

interface NotableMentionGeneral extends NotableMentionBase {
  kind: 'general'
  pageElements: Omit<
    NotableMentionPageElements,
    'aboutImageUrl' | 'aboutImageAlt'
  >
}

export type NotableMention =
  | NotableMentionWeb
  | NotableMentionMobile
  | NotableMentionGeneral

const data: NotableMention[] = [
  {
    id: 'cleartrip-bus',
    title: 'Cleartrip Bus',
    cardImageUrl: '/notable/cleartrip-bus/card-image.png',
    cardImageAlt: 'firstbox',
    description:
      'Creating a user-friendly and convenient platform for buying bus tickets.',
    pageElements: {
      description:
        'Rethinking the flow of the bus booking and post-booking experience',
      heroImageUrl: '/notable/cleartrip-bus/cleartrip-bus.png',
      heroImageAlt: 'cleartrip',
      about:
        'This project was part of the Cleartrip bus team, with the goal of making it easier for users to book bus tickets. While the process of finding buses, checking their details, and making a booking may seem straightforward. We wanted to enhance the overall experience to ensure a smoother and more enjoyable journey for our users.',
      aboutImageUrl: '/notable/cleartrip-bus/about-bus.png',
      aboutImageAlt: 'About Image',
      contribution:
        'I was part of a dedicated team consisting of two designers, led by our manager. Our collective effort was focused on driving progress in this project within a tight timeline of five days.',
      sectionOne: {
        heading: 'Detailed',
        headerSpan: 'Cards',
        description:
          'The card displays all vital information, making it easy for users to compare and choose the right design. Emphasised essential details, ensuring users can quickly identify the most useful information for selecting the appropriate bus.',
        imageAlt: '',
        imageUrl: '/notable/cleartrip-bus/section-one-left.png',
      },
      sectionTwo: {
        heading: 'All in one',
        headerSpan: 'screen',
        description:
          'This section lets users choose seats, review bus amenities, check cancellation policies, and read user reviews – a crucial and transparent feature for informed decision-making before boarding.',
        imageAlt: 'second',
        imageUrl: '/notable/cleartrip-bus/cleartrip-section-right-second.png',
      },
      sectionThree: {
        heading: 'Review your',
        headerSpan: 'Booking',
        description:
          'Prior to making a payment, users often want to confirm the accuracy of their selections, leading to repeated back-and-forth checks. To simplify this process for users and ensure they make the right choices, we introduced a review page before payment.',
        imageUrl: '/notable/cleartrip-bus/cleartripbus-section-left-third.png',
        imageAlt: '',
      },
      multiMobileImgUrl: '/notable/cleartrip-bus/multi-mobiles.png',
      multiMobileImgAlt: 'multi',
    },
    categories: ['mobile'],
    kind: 'mobile',
  },
  {
    id: 'ct-support',
    title: 'Cleartrip support',
    description:
      'Suite to view and access various benefits applicable when booking flights and hotels',
    cardImageUrl: '/notable/cleartrip-support/card-image.png',
    cardImageAlt: 'firstbox',
    kind: 'mobile',
    categories: ['mobile', 'Web App'],
    pageElements: {
      aboutImageUrl: '/notable/cleartrip-support/about.png',
      aboutImageAlt: 'About Image',
      description:
        'Platform for users to chat and seek assistance for their ongoing & past bookings',
      heroImageUrl: '/notable/cleartrip-support/hero-image.gif',
      heroImageAlt: 'cleartrip',
      about:
        'Cleartrip`s support primarily relies on chatbots to swiftly address customer inquiries. This allows human agents to focus on more pressing matters. Cleartrip support serves as an inbox tool for users seeking assistance with upcoming or past bookings. Users can discuss their questions, and the chatbot will assist them in connecting with the customer support team.',
      contribution:
        'In the project, I served as the sole designer, establishing direct communication with both the CX (Customer Experience) team and agents. My role involved closely collaborating with them to gain insights into the challenges they faced when users contacted them with various queries. The objective was to comprehensively address and solve issues across all possible scenarios, ensuring a more effective and user-friendly resolution for a wide range of use cases.',
      sectionOne: {
        heading: 'Visibility',
        headerSpan: 'across app',
        description:
          'We aimed to enhance the visibility of Cleartrip support across the entire application, seamlessly integrating it from the user\'s "profile page" to the "My Trip" section. This strategic approach ensures that users can easily connect with support not only for significant concerns but also for addressing even the minutest issues they may encounter throughout their Cleartrip journey.',
        imageAlt: 'sectionImage',
        imageUrl: '/notable/cleartrip-support/section-1.png',
      },
      sectionTwo: {
        heading: 'Easy to',
        headerSpan: 'interact',
        description:
          'It was designed to be effortlessly interactive, providing users with a seamless and user-friendly experience. Support bot is crafted to ensure simplicity in every interaction, making it easy for users to navigate and address their queries.',
        imageAlt: 'sectionTwo',
        imageUrl: '/notable/cleartrip-support/section-2.png',
      },
      sectionThree: {
        heading: 'Self Server in',
        headerSpan: '10 seconds',
        description:
          'The chatbot worked best when customers wanted to cancel or reschedule their bookings and get a refund. We looked at lots of conversations about upcoming trips and figured out the main reasons people cancel. Then, we made a simple chatbot flow to make it easy for customers.',
        imageAlt: 'third section',
        imageUrl: '/notable/cleartrip-support/section-3.png',
      },
      multiMobileImgUrl: '/notable/cleartrip-support/multimobiles.png',
      multiMobileImgAlt: 'multi',
    },
  },
  {
    id: 'ct-flexmax',
    title: 'CT-Flexmax',
    description:
      'Platform for users to chat and seek assistance for their ongoing & past bookings',
    cardImageUrl: '/notable/ctflexmax/card-image.svg',
    cardImageAlt: 'firstbox',
    kind: 'mobile',
    categories: ['mobile', 'Web App'],
    pageElements: {
      aboutImageUrl: '/notable/ctflexmax/about.png',
      aboutImageAlt: 'About Image',
      description:
        'CT FlexMax offers free cancel or reschedule on all domestic flight bookings',
      heroImageUrl: '/notable/ctflexmax/heroimage.gif',
      heroImageAlt: 'cleartrip',
      about:
        'CT FlexMax stands out as a unique Cleartrip program, granting users the flexibility to cancel or reschedule domestic flight bookings at no extra cost. This encompasses a single free cancellation or the option to change the date/airline. Users have the liberty to make cancellations or reschedule up to 24 hours before the scheduled flight departure. In the case of cancellations, users are entitled to a full refund, minus the convenience fee.',
      contribution:
        'Over a span of three months, I collaborated as the sole designer alongside a product manager. My primary focus was on elevating the product, ensuring optimal visibility, and effectively communicating to users why they should opt for this program.',
      sectionOne: {
        heading: 'Introduced',
        headerSpan: 'Fare families',
        description:
          'This initiative introduced fare families to Cleartrip, providing users with enhanced visibility and transparency during the flight ticket booking process. The aim was to guide users in making informed choices that align with their preferences and needs.',
        imageAlt: '',
        imageUrl: '/notable/ctflexmax/section-1.png',
      },
      sectionTwo: {
        heading: 'Post booking',
        headerSpan: 'is key',
        description:
          'The primary focus of this project was on post-booking activities, specifically addressing users who come to cancel or reschedule their flights based on their convenience and preferred dates. A key objective of the project was to ensure the full functionality of post-booking processes, making it seamless for users to modify their plans as needed.',
        imageUrl: '/notable/ctflexmax/section-2.png',
        imageAlt: '',
      },
      sectionThree: {
        heading: 'Conversion of',
        headerSpan: 'charged user',
        description:
          'Introducing a feature in a product often poses a challenge for users to grasp, especially when they prioritize cost savings and are hesitant to invest in premium options. However, upon the launch of CT FlexMax, we witnessed an impressive average conversion rate of 21% in the initial months. Users were particularly drawn to the affordability of the offering.',
        imageAlt: '',
        imageUrl: '/notable/ctflexmax/section-3.png',
      },
    },
  },
  {
    id: 'report-center',
    title: 'Report Center',
    description:
      'Easily reconcile and gain insights. All reports accessible through one dashboard',
    cardImageUrl: '/notable/reportcenter/card-image.svg',
    cardImageAlt: 'firstbox',
    kind: 'web',
    categories: ['Web App'],
    pageElements: {
      description:
        'Easily reconcile and gain insights. All reports accessible through one dashboard',
      heroImageUrl: '/notable/ctflexmax/heroimage.gif',
      heroImageAlt: 'cleartrip',
      about:
        'Report Center is a simple and easy-to-use business intelligence tool that lets users learn and understand their company\'s data. It lets you view, modify and schedule reports with ease. Your reports are categorised into different catalogs that help you navigate and find reports conveniently.',
      contribution:
        'I was the only designer, reporting to a design manager. - I played a role in optimizing report organization into user-friendly catalogs, facilitating convenient navigation for users.',
      sectionImages: [
        {
          id: 1,
          imageUrl: '',
          imageAlt: '',
        }
      ]
    },
  },
]

export default data
