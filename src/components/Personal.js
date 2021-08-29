import Icon from "./Icon"

const projects = [
    {
        name: 'TETRA',
        link: '',
        description: 'Audio visualizer dynamically animated purely with CSS. A proof of concept for doing nontrival math using only CSS.',
        technologies: ['CSS', 'Web Audio API']
    },
    {
        name: 'time.claps',
        link: '',
        description: 'Web app used to display a synchronized countdown. Created to help coordinate certain activities with friends remotely, such as playing videos or syncing local audio recordings.',
        technologies: ['React', 'express']
    },
    {
        name: 'ADALIN',
        link: 'https://github.com/hmeinertrita/ADALIN',
        description: 'Discord bot integrated with a Dialogflow agent and a wiki. Can answer freeform questions about the contents of the wiki through text or speech recognition.',
        technologies: ['Dialogflow', 'Discord.js', 'Google Speech API']
    },
    {
        name: 'ocean',
        link: '',
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
                <a href={project.link} className={'personal--repo'}><Icon icon={'github'}/><span>{'GitHub'}</span></a>
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