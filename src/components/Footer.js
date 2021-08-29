import Icon from "./Icon"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <div className={'footer'}>
        <span>{'Resume built and designed from the ground up by me using React'}</span>
        <a href={'https://www.github.com'} className={'footer--link'}><Icon icon={'links'}/><span>{'View in browser'}</span></a>
        <a href={'https://www.github.com'} className={'footer--link'}><Icon icon={'github'}/><span>{'View GitHub Repository'}</span></a>
    </div>
)