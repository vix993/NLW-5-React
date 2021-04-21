import format from 'date-fns/format';

export const Header = () => {
    const currentDate = format(new Date(), 'iii, d MMMM');
    return (
        <header className="bg-white h-24 flex align-center py-8 px-16 border-b border-gray-100">
            <img src="/logo.svg" alt="podcastr logo"/>

            <p className="ml-8 pt-1 pb-1 pl-8 border-l border-gray-100">The best content to listen to, always</p>

            <span className="ml-auto capitalize">{currentDate}</span>
        </header>
    )
}