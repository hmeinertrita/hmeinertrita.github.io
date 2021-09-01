import PrinterLink from "./PrinterLink"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className={'footer'}>
        <span>{'Resume designed and built from the ground up by me using React'}</span>
        <PrinterLink className={'footer--link'} url={'https://hmeinertrita.github.io/resume/'} text={'View in browser'} prependIcon={'links'}/>
        <PrinterLink className={'footer--link'} url={'https://www.github.com/hmeinertrita/resume'} text={'Visit GitHub repository'} prependIcon={'github'}/>
    </div>
)