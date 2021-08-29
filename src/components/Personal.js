import PrinterLink from "./PrinterLink"

const projects = [
    {
        name: 'TETRA',
        link: 'https://github.com/hmeinertrita/TETRA',
        demoLink: 'test',
        description: 'Audio visualizer dynamically animated purely with CSS. A proof of concept for doing nontrival math using only CSS.',
        technologies: ['CSS', 'Web Audio API']
    },
    {
        name: 'time.claps',
        link: 'https://github.com/hmeinertrita/time.claps',
        demoLink: 'https://time-clap.glitch.me',
        description: 'Web app used to display a synchronized countdown. Created to help coordinate certain activities with friends remotely, such as playing videos or syncing local audio recordings.',
        technologies: ['React', 'express']
    },
    {
        name: 'ADALIN',
        link: 'https://www.github.com/hmeinertrita/ADALIN',
        description: 'Discord bot integrated with a Dialogflow agent and a wiki. Can answer freeform questions about the contents of the wiki through text or speech recognition.',
        technologies: ['Dialogflow', 'Discord.js', 'Google Speech API']
    },
    {
        name: 'ocean',
        link: '',
        demoLink: 'test',
        description: 'First-person audio visualizer made in Unity. Made with easily configurable settings to change the visuals to fit any song.',
        technologies: ['Unity']
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const projectComponents = projects.map((project, i) => {
        return <div key={i} className={'personal--project'}>
            <div className={'personal--repo-technologies'}>
                <h2 className={'personal--name'}>{project.name}</h2>
                <div className={'personal--links'}>
                    <PrinterLink className={'personal--link'} url={project.link} text={'GitHub'} prependIcon={'github'}/>
                    {project.demoLink ? <PrinterLink className={'personal--link'} url={project.demoLink} text={'Demo'} prependIcon={'links'}/> : undefined}
                </div>
            </div>
            <div className={'personal--technologies'}>{project.technologies.join(' • ')}</div>
            <p className={'personal--description'}>{project.description}</p>
        </div>
    })
    return <div className={'personal'}>
        <h1 className={'personal--heading heading--body'}>{'Personal Projects'}</h1>
        {projectComponents}
    </div>
}