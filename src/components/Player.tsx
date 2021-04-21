export const Player = () => {
    return (
        <div
            className="w-96 h-screen py-6 px-8 bg-purple-500 text-white flex flex-col items-center justify-between"
        >
            <header className="flex items-center gap-4">
                <img src="/playing.svg" alt="Playing now"/>
                <strong className="font-lexend font-semibold">Playing</strong>
            </header>

            <div
                className="w-full h-80 border-dashed border border-purple-300 rounded-2xl bg-gradient-to-b from-purple-400 to-purple-500 p-16 text-center flex items-center justify-center"
            >
                <strong className="font-lexend font-semibold">Choose a pod to cast</strong>
            </div>

            <footer className={`self-stretch`}>
                <div className="flex items-center gap-2 text-sm">
                    <span className="inline-block w-16 text-center">00:00</span>
                    <div className="flex-1">
                        <div className="w-full h-1 bg-purple-300 border rounded-lg"/>
                    </div>
                    <span className="inline-block w-16 text-center">00:00</span>
                </div>
                <div className="flex items-center justify-center mt-10 gap-6">
                    <button type="button" className="bg-transparent border-0 text-0">
                        <img src="/shuffle.svg" alt="Shuffle"/>
                    </button>

                    <button type="button" className="bg-transparent border-0 text-0">
                        <img src="/play-previous.svg" alt="Play previous"/>
                    </button>

                    <button type="button" className="w-12 h-12 border border-purple-400 rounded-xl bg-purple-400 bg-transparent border-0 text-0 py-1 px-2">
                        <img src="/play.svg" alt="Play"/>
                    </button>

                    <button type="button" className="bg-transparent border-0 text-0">
                        <img src="/play-next.svg" alt="Play next"/>
                    </button>

                    <button type="button" className="bg-transparent border-0 text-0">
                        <img src="/repeat.svg" alt="repeat"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}