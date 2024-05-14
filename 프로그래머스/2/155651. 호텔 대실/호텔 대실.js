function solution(book_time) {
    const rooms = [];
    const bookTimeInMinutes = book_time.map((time) => getNumberBookTime(time)).sort((a, b) => a[0] - b[0]);

    bookTimeInMinutes.forEach((time) => {
        const checkIn = time[0];
        let roomUpdated = false;

        for (let i = 0; i < rooms.length; i++) {
            if (checkIn >= rooms[i][1]) { // If the new check-in is after the check-out of the room
                rooms[i] = time; // Update the room timing
                roomUpdated = true;
                break;
            }
        }
        
        if (!roomUpdated) rooms.push(time); // If no room was available to update, push as a new room
    });
    
    return rooms.length;
}

function getNumberBookTime(bookTime) {
    const [checkIn, checkOut] = bookTime;

    const parseTimeToMinutes = (time, addMinutes = 0) => {
        return time.split(":").reduce((acc, cur, index) => acc + Number(cur) * (index === 0 ? 60 : 1), addMinutes);
    };

    const checkInNumber = parseTimeToMinutes(checkIn);
    const checkOutNumber = parseTimeToMinutes(checkOut, 10); // Add buffer time explicitly here
    
    return [checkInNumber, checkOutNumber];
}
