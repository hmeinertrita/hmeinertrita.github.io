import Icon from "./Icon"

const about = [
    'I am Software Engineer dedicated to creating new and interesting things.',
    'My goal is always to create unique and exciting experiences for those who use the things I make.',
    'I have experience working in multidisciplinary teams as well as working independently.',
    'I am committed to finishing tasks to a high standard, motivated and quick to learn new skills and technology, and find creative solutions to problems.'
].join(' ')

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className={'about'}>
        <div className={'about--contact-heading'}>
            <h1 className={'about--heading'}>{'About Me'}</h1>
            <div className={'about--contact'}>
                <a className={'about--contact-item'} href={'https://www.github.com/hmeinertrita'}><span>{'github.com/hmeinertrita'}</span><Icon icon={'github'}/></a>
                <a className={'about--contact-item'} href={'https://www.linkedin.com/in/hmeinertrita'}><span>{'linkedin.com/in/hmeinertrita'}</span><Icon icon={'linkedin'}/></a>
                <a className={'about--contact-item'} href={'mailto:hmeinertrita@gmail.com'}><span>{'hmeinertrita@gmail.com'}</span><Icon icon={'mail-send'}/></a>
                <div className={'about--contact-item'}><span>{'1-585-733-3463'}</span><Icon icon={'phone'}/></div>
            </div>
        </div>
        <p className={'about--description'}>{about}</p>
    </div>
)