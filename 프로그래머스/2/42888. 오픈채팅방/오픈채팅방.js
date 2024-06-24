function solution(records) {
    const ids = {};
    const nameList = [];
    
    records.forEach((record) => {
        const [status, id, userName] = record.split(" ");
        
        if (status !== "Change") nameList.push([status, id]);
        if (status === "Leave") return;
        
        ids[id] = userName;
    });
    
    const answer = nameList.map(([status, id]) => {
        if (status === "Enter") return `${ids[id]}님이 들어왔습니다.`;
        else return `${ids[id]}님이 나갔습니다.`
    });
    
    return answer;
}