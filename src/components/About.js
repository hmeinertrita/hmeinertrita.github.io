import Icon from "./Icon"
import PrinterLink from "./PrinterLink"

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
                <PrinterLink className={'about--contact-item'} url={'https://www.github.com/hmeinertrita'} text={'GitHub Repositories'} appendIcon={'github'}/>
                <PrinterLink className={'about--contact-item'} url={'https://www.linkedin.com/in/hmeinertrita'} text={'LinkedIn Profile'} appendIcon={'linkedin'}/>
                <PrinterLink className={'about--contact-item'} url={'mailto:hmeinertrita@gmail.com'} appendIcon={'mail-send'}/>
                <div className={'about--contact-item'}><span>{'1-585-733-3463'}</span><Icon icon={'phone'}/></div>
            </div>
        </div>
        <p className={'about--description'}>{about}</p>
    </div>
)