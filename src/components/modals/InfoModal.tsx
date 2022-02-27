import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
    isOpen: boolean
    handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
    return (
        <BaseModal title="Lentle: Lenten Wordle" isOpen={isOpen} handleClose={handleClose}>
             <p className="text-sm text-gray-500 dark:text-gray-300"><strong>How to play:</strong></p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                Guess the word in 6 tries. After each guess, the color of the tiles will
                change to show how close your guess was to the word.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">Each day's word is related to Lent or to the daily scripture reading from here: <a href="https://bible.usccb.org/daily-bible-reading" target="_blank">USCCB Daily Readings</a></p>
            <div className="flex justify-center mb-1 mt-4">
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="S"
                    status="correct"
                />
                <Cell value="A" />
                <Cell value="I" />
                <Cell value="N" />
                <Cell value="T" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter S is in the word and in the correct spot.
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="A" />
                <Cell value="D" />
                <Cell
                    isRevealing={true}
                    isCompleted={true}
                    value="M"
                    status="present"
                />
                <Cell value="I" />
                <Cell value="T" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter M is in the word but in the wrong spot.
            </p>

            <div className="flex justify-center mb-1 mt-4">
                <Cell value="C" />
                <Cell value="U" />
                <Cell value="R" />
                <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
                <Cell value="D" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                The letter E is not in the word in any spot.
            </p>

            <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
                This is an open source version of the word guessing game we all know and
                love.  Feel free to share, copy, or host on your Web server.
            </p>
            <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
                Source code:&nbsp;
                <a
                    href="https://github.com/jimlawruk/lentle"
                    className="underline font-bold"
                >github.com/jimlawruk/lentle</a> forked from:&nbsp;
                <a
                    href="https://github.com/jimlawruk/lentle"
                    className="underline font-bold"
                >github.com/cwackerfuss/react-wordle</a>
            </p>

        </BaseModal >
    )
}
