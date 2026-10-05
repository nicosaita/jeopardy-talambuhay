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
        answer: 'Strawberry',
    },
    {
        points: 450,
        question:
            'What did I eat for breakfast today?',
        answer: 'Nothing',
    },
    {
        points: 300,
        question: 'What grade did I come into Horace Mann?',
        answer: '6th',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'What breed is my dog?',
            imgSrc: '/dog.png',
            answer: 'Labradoodle',
        },
        {
            points: 50,
            question:
                'What is my favorite candy?',
            imgSrc: '/m&m.png',
            answer: 'M&Ms',
        },
        {
            points: 100,
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
const randomQuestions: Question[] = sortQuestions([
     {
        points: 100,
        question:
            'What is my favorite season?',
        answer: 'Fall',
    },
    {
        points: 200,
        question:
            'What is my favorite color?',
        imgSrc:
            "/color.png",
        answer: 'Green',
    },
    {
        points: 300,
        question:
            'What is my favorite food?',
        answer: 'Sushi',
    },
    {
        points: 5000,
        question:
            'What is my Chipotle order?',
        imgSrc:
            "/chipotle.png",
        answer: 'Burrito bowl with white rice, black beans, chicken, tomato salsa, guacamole, and cheese.',
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
        title: "Random Questions",
        questions: randomQuestions
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