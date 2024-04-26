type QuestionValue = {
    yes: number;
    no: number;
};

type QuestionProps = {
    q: string;
    value: QuestionValue;
};

export const questions: QuestionProps[] = [
    {
        q : "1. 자신의 한계를 인정하고 필요할 때 도움을 요청하는 데 주저하지 않는다.",
        value : {yes : -4, no : 4}
    },
    {
        q : "2. 새로운 환경이나 상황에 적응하는 데 시간이 오래 걸린다.",
        value : {yes : 2, no : -2}
    },
    {
        q : "3. 주변 사람들과의 갈등이 발생했을 때 상황을 평화롭게 해결하려는 노력을 기울이나요",
        value : {yes : 3, no : -3}
    },
    {
        q : "4. 새로운 아이디어나 관심사에 열정적으로 몰입하는 편인가요?",
        value : {yes : -4, no : 4}
    },
    {
        q : "5. 어려운 상황에서도 자신의 감정을 조절할 수 있는 능력이 있나요?",
        value : {yes : 5, no : -5}
    },
    {
        q : "6. 다른 사람들의 의견에 대해 비판적으로 생각하고 자신의 판단을 내릴 수 있는 능력이 있나요?",
        value : {yes : 5, no : -5}
    },
    {
        q : "새로운 사람들과의 관계를 형성하고 유지하는 데 노력을 기울이나요?",
        value : {yes : -4, no : 4}
    },
    {
        q : "8.주변 사람들의 요구에 따라 자신의 의사를 억누르는 경향이 있나요?",
        value : {yes : 3, no : -3}
    },
    {
        q : "9.어린아이가 울며 때 쓰는 광경을 보면 화가 난다",
        value : {yes : -4, no : 4}
    },
    {
        q : "10.편식이 심하고 음식에 싫어하는 것이 섞여있으면 빼고 먹는다",
        value : {yes : -4, no : 4}
    },
    {
        q : "11 나는 아직 모르는 것이 많다고 생각한다",
        value : {yes : 5, no : -5}
    },
    {
        q : "12. 내 마음대로 되지 않으면 화가 난다.",
        value : {yes : -2, no : 2}
    },
    {
        q : "13. 집 앞 가까운 거리를 잠시 나갈 때도 외모에 신경을 쓴다.",
        value : {yes : -2, no : 2}
    },
    {
        q : "14.내 의견을 말 할 때 주저하게 된다.",
        value : {yes : -1, no : 1}
    },
    {
        q : "16. 갖고 싶은 것이 있다면 꼭 가져야한다.",
        value : {yes : -1, no : 1}
    }

];