import Icon from "./Icon"

const jobs = [
    {
        company: 'Psyop',
        location: 'Los Angeles, CA',
        title: 'Data Wrangler & AR Developer',
        contact: 'Matthew Seymour',
        contactTitle: 'General Manager VR/AR, Free Range Games',
        contactEmail: 'm_seymour@me.com',
        items: [
            'Worked in the Real-time Interactive group at renowned commercial & game content studio Psyop\'s LA division',
            'Data wrangler for mocap data on a AAA video game project. Attended motion capture shoots and processed all data and footage for use in animation, client review, and Unreal.',
            'Solo developer on various augmented reality proof-of-concepts using a variety of technologies including Unity, 8th Wall, and ARKit.',
        ]
    },
    {
        company: 'Myplanet',
        location: 'Toronto, ON',
        title: 'Software Developer',
        contact: 'Yashar Rassoulli',
        contactTitle: 'CTO & Co-Founder, Myplanet',
        contactEmail: 'yashar@myplanet.com',
        items: [
            'Front-end lead on a project for a national telecom company developing a high profile customer facing, medical web application. Worked onsite at client\'s headquarters as primary liaison for front-end implementation.',
            'Front-end developer and DevOps lead launching an eCommerce website for a new retail brand. Set up and maintained a continuous deployment pipeline using GitHub and AWS. Reseached and integrated various headless eCommerce platorms.'
        ]
    },
    // {
    //     company: 'TestTunes',
    //     location: 'Senior Project at RIT',
    //     title: 'Developer',
    //     items: [
    //         'Worked with a small team of other students to develop and integrate a survey platform into a mobile app for students to listen to music during exams.',
    //         'Implemented new features into an existing codebase built on React Native with a Rust back-end.',
    //     ]
    // }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const jobComponents = jobs.map((job, i) => {
        const list = job.items.map((item, j) => {
            return <p key={j}>{item}</p>
        })
        return <div className={'work--job'}>
            <h2 className={'work--job-company'}>{job.company + ' - ' + job.location}</h2>
            <div className={'work--job-title'}>{job.title}</div>
            <div className={'work--contact'}>
                <Icon icon={'contacts-book'}/>
                <div className={'work--contact-info'}>
                    <div className={'work--contact-name'}>{job.contact}</div>
                    <a className={'work--contact-email'} href={'mailto:' + job.contactEmail}>{job.contactEmail}</a>
                </div>
            </div>
            {list}
        </div>
    })
    return <div className={'work'}>
        <h1 className={'work--heading heading--body'}>{'Work Experience'}</h1>
        {jobComponents}
    </div>
}