import Icon from "./Icon"
import PrinterLink from "./PrinterLink"

const about = [
    'I am Software Engineer dedicated to creating new and interesting experiences.',
    'My goal is always to build something unique and exciting for anyone using what I make.',
    'I\'ve multidisciplinary teams as well as working independently and I am comfortable with both.',
    'I am committed to finishing tasks to a high standard, motivated and quick to learn new skills and technology, and to find creative solutions to problems.'
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