import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What month was I born in?',
        imgSrc: "/may.png",
        answer: 'May',
    },
    {
        points: 200,
        question:
            'What was my favorite flavor of ice cream in middle school?',
        imgSrc: "/strawberry.png",
        answer: 'Strawberry',
    },
    {
        points: 300,
        question:
            'What did I eat for breakfast today?',
        answer: 'Nothing',
    },
    {
        points: 400,
        question: 'What elementary school did I go to?',
        imgSrc: "/siwanoy.png",
        answer: 'Siwanoy',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What breed is my dog?',
            imgSrc: '/',
            answer: 'Labradoodle',
        },
        {
            points: 100,
            question:
                'What is my favorite candy?',
            imgSrc: '/m&m.png',
            answer: 'M&Ms',
        },
        {
            points: 200,
            question: 'What grade am I in?',
            answer: '11th',
        },
        {
            points: 300,
            question:
                'What is my favorite movie?',
            imgSrc:
                "/bttf.png",
            answer: 'Back to the Future',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    }
]);


const categories = [
    {
        title: 'Nico\'s Past',
        questions: pastQuestions
    },
    {
        title: `Nico's Present`,
        questions: presentQuestions
    },
    {
        title: "Nico's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}